import {
  InMemoryTransport,
  McpServer,
  type JSONRPCMessage,
} from "@modelcontextprotocol/server";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { registerPrompts } from "../src/prompts/register-prompts.js";
import { ComponentService } from "../src/services/component.service.js";
import type { GovBrComponent } from "../src/types/component.js";

const button: GovBrComponent = {
  name: "Button",
  slug: "button",
  description: "Executa ações na interface.",
  documentationUrl: "https://www.gov.br/ds/components/button",
  sections: [
    { title: "Uso", level: 2, content: "Conteúdo geral exclusivo." },
  ],
  accessibility: [
    {
      title: "Recomendações para Código",
      level: 2,
      content: "Use `aria-label` em botões somente com ícone.",
    },
  ],
  source: {
    repository: "govbr-ds/govbr-ds",
    ref: "main",
    documentationPath: "ds/componentes/button/button.md",
    accessibilityPath: "ds/componentes/button/button-access.md",
  },
};

const zeta: GovBrComponent = {
  name: "Zeta",
  slug: "zeta",
  description: "Componente sem acessibilidade.",
  documentationUrl: "https://www.gov.br/ds/components/zeta",
  sections: [{ title: "Uso", level: 2, content: "Conteúdo Zeta." }],
  accessibility: [],
  source: {
    repository: "govbr-ds/govbr-ds",
    ref: "main",
    documentationPath: "ds/componentes/zeta/zeta.md",
  },
};

const autocompleteComponents = Array.from({ length: 12 }, (_, index) => ({
  ...zeta,
  name: `Alpha ${String(index).padStart(2, "0")}`,
  slug: `alpha-${String(index).padStart(2, "0")}`,
}));

type ResponseMessage = Extract<JSONRPCMessage, { id: string | number }>;
type PromptMessage = {
  role: string;
  content:
    | { type: "text"; text: string }
    | {
        type: "resource";
        resource: { uri: string; mimeType?: string; text?: string };
      };
};

describe("MCP prompts integration", () => {
  const server = new McpServer({ name: "prompts-test", version: "1.0.0" });
  const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();
  const pending = new Map<number, (message: ResponseMessage) => void>();
  let requestId = 0;

  const rawRequest = async (method: string, params: Record<string, unknown>) =>
    new Promise<ResponseMessage>(async (resolve) => {
      const id = ++requestId;
      pending.set(id, resolve);
      await clientTransport.send({ jsonrpc: "2.0", id, method, params });
    });

  const request = async (method: string, params: Record<string, unknown>) => {
    const message = await rawRequest(method, params);

    if ("error" in message) {
      throw new Error(message.error.message);
    }

    return message.result;
  };

  beforeAll(async () => {
    registerPrompts(
      server,
      new ComponentService([button, zeta, ...autocompleteComponents]),
    );
    clientTransport.onmessage = (message) => {
      if (!("id" in message)) {
        return;
      }

      const resolver = pending.get(Number(message.id));
      if (resolver) {
        pending.delete(Number(message.id));
        resolver(message);
      }
    };
    await clientTransport.start();
    await server.connect(serverTransport);
    await request("initialize", {
      protocolVersion: "2025-06-18",
      capabilities: {},
      clientInfo: { name: "prompts-test", version: "1.0.0" },
    });
    await clientTransport.send({
      jsonrpc: "2.0",
      method: "notifications/initialized",
    });
  });

  afterAll(async () => {
    await server.close();
  });

  it("lists the three prompts and their arguments", async () => {
    const result = (await request("prompts/list", {})) as {
      prompts: Array<{
        name: string;
        title?: string;
        arguments?: Array<{ name: string; required?: boolean }>;
      }>;
    };

    expect(result.prompts.map(({ name }) => name)).toEqual([
      "implement_govbr_component",
      "review_govbr_component",
      "check_govbr_accessibility",
    ]);
    expect(result.prompts[0]).toMatchObject({
      title: "Implement GovBR Component",
      arguments: [
        { name: "component", required: true },
        { name: "requirements", required: false },
      ],
    });
  });

  it.each(["button", "Button", "BUTTON"])(
    "gets the implementation prompt case-insensitively for %s",
    async (component) => {
      const result = (await request("prompts/get", {
        name: "implement_govbr_component",
        arguments: { component },
      })) as { messages: PromptMessage[] };
      const resource = result.messages[0].content;
      const instruction = result.messages[1].content;

      expect(resource).toMatchObject({
        type: "resource",
        resource: {
          uri: "govbr-ds://components/button",
          mimeType: "text/markdown",
        },
      });
      expect(resource).toHaveProperty("resource.text", expect.stringContaining("# Button"));
      expect(resource).toHaveProperty(
        "resource.text",
        expect.stringContaining("Conteúdo geral exclusivo."),
      );
      expect(instruction).toHaveProperty(
        "text",
        expect.stringContaining("Implemente o componente Button"),
      );
      expect(JSON.stringify(result)).not.toContain("undefined");
    },
  );

  it("adds optional implementation requirements when supplied", async () => {
    const requirements = "Preciso de uma ação principal para confirmar o formulário.";
    const result = (await request("prompts/get", {
      name: "implement_govbr_component",
      arguments: { component: "button", requirements },
    })) as { messages: PromptMessage[] };

    expect(result.messages[1].content).toHaveProperty(
      "text",
      expect.stringContaining(requirements),
    );
  });

  it("gets the review prompt with the component resource and supplied code", async () => {
    const code = '<button class="br-button">Enviar</button>';
    const result = (await request("prompts/get", {
      name: "review_govbr_component",
      arguments: { component: "button", code },
    })) as { messages: PromptMessage[] };

    expect(result.messages[0].content).toHaveProperty(
      "resource.uri",
      "govbr-ds://components/button",
    );
    expect(result.messages[1].content).toHaveProperty(
      "text",
      expect.stringContaining(code),
    );
    expect(result.messages[1].content).toHaveProperty(
      "text",
      expect.stringContaining("possíveis problemas"),
    );
  });

  it("gets only the accessibility resource in the accessibility prompt", async () => {
    const code = '<button class="br-button circle"><i class="fas fa-plus"></i></button>';
    const result = (await request("prompts/get", {
      name: "check_govbr_accessibility",
      arguments: { component: "button", code },
    })) as { messages: PromptMessage[] };
    const serialized = JSON.stringify(result);

    expect(result.messages[0].content).toHaveProperty(
      "resource.uri",
      "govbr-ds://components/button/accessibility",
    );
    expect(result.messages[0].content).toHaveProperty(
      "resource.text",
      expect.stringContaining("Use `aria-label`"),
    );
    expect(serialized).not.toContain("Conteúdo geral exclusivo.");
    expect(result.messages[1].content).toHaveProperty(
      "text",
      expect.stringContaining(code),
    );
  });

  it.each([
    ["implement_govbr_component", { component: "missing" }],
    ["check_govbr_accessibility", { component: "zeta", code: "<div />" }],
  ])("returns Invalid Params when a prompt cannot resolve its documentation", async (name, args) => {
    const message = await rawRequest("prompts/get", {
      name,
      arguments: args,
    });

    expect(message).toHaveProperty("error.code", -32602);
    expect(message).toHaveProperty("error.message", expect.stringContaining("não encontrad"));
  });

  it("autocompletes component slugs case-insensitively", async () => {
    const result = (await request("completion/complete", {
      ref: { type: "ref/prompt", name: "implement_govbr_component" },
      argument: { name: "component", value: "BU" },
    })) as { completion: { values: string[] } };

    expect(result.completion.values).toEqual(["button"]);
  });

  it("limits component autocomplete to ten sorted values", async () => {
    const result = (await request("completion/complete", {
      ref: { type: "ref/prompt", name: "review_govbr_component" },
      argument: { name: "component", value: "alpha" },
    })) as { completion: { values: string[]; total?: number; hasMore?: boolean } };

    expect(result.completion.values).toHaveLength(10);
    expect(result.completion.values).toEqual(
      Array.from({ length: 10 }, (_, index) => `alpha-${String(index).padStart(2, "0")}`),
    );
  });

  it("does not make HTTP requests while resolving prompts", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch");

    await request("prompts/get", {
      name: "review_govbr_component",
      arguments: { component: "button", code: "<button>Ok</button>" },
    });

    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
