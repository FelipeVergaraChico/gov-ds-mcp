import {
  InMemoryTransport,
  McpServer,
  type JSONRPCMessage,
} from "@modelcontextprotocol/server";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { registerResources } from "../src/resources/register-resources.js";
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
      content: "Use `aria-label`.",
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

describe("MCP resources integration", () => {
  const server = new McpServer({ name: "resources-test", version: "1.0.0" });
  const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();
  const pending = new Map<
    number,
    (message: Extract<JSONRPCMessage, { id: string | number }>) => void
  >();
  let requestId = 0;

  const rawRequest = async (method: string, params: Record<string, unknown>) =>
    new Promise<Extract<JSONRPCMessage, { id: string | number }>>(
      async (resolve) => {
        const id = ++requestId;
        pending.set(id, resolve);
        await clientTransport.send({ jsonrpc: "2.0", id, method, params });
      },
    );

  const request = async (method: string, params: Record<string, unknown>) => {
    const message = await rawRequest(method, params);

    if ("error" in message) {
      throw new Error(message.error.message);
    }

    return message.result;
  };

  beforeAll(async () => {
    registerResources(server, new ComponentService([zeta, button]));
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
      clientInfo: { name: "resources-test", version: "1.0.0" },
    });
    await clientTransport.send({
      jsonrpc: "2.0",
      method: "notifications/initialized",
    });
  });

  afterAll(async () => {
    await server.close();
  });

  it("lists static, component and available accessibility resources", async () => {
    const result = (await request("resources/list", {})) as {
      resources: Array<{ uri: string; mimeType?: string }>;
    };
    const uris = result.resources.map(({ uri }) => uri);

    expect(uris).toContain("govbr-ds://catalog");
    expect(uris).toContain("govbr-ds://components/button");
    expect(uris).toContain("govbr-ds://components/zeta");
    expect(uris).toContain("govbr-ds://components/button/accessibility");
    expect(uris).not.toContain("govbr-ds://components/zeta/accessibility");
    expect(
      result.resources.every(({ mimeType }) => mimeType === "text/markdown"),
    ).toBe(true);
  });

  it("lists both resource templates", async () => {
    const result = (await request("resources/templates/list", {})) as {
      resourceTemplates: Array<{ uriTemplate: string }>;
    };

    expect(result.resourceTemplates.map(({ uriTemplate }) => uriTemplate)).toEqual(
      expect.arrayContaining([
        "govbr-ds://components/{slug}",
        "govbr-ds://components/{slug}/accessibility",
      ]),
    );
  });

  it("reads component Markdown", async () => {
    const result = (await request("resources/read", {
      uri: "govbr-ds://components/button",
    })) as {
      contents: Array<{ uri: string; mimeType?: string; text?: string }>;
    };
    const content = result.contents[0];

    expect(content.mimeType).toBe("text/markdown");
    expect(content.text).toContain("# Button");
    expect(content.text).toContain("## Uso");
    expect(content.text).toContain("Conteúdo geral exclusivo.");
  });

  it("reads only accessibility Markdown", async () => {
    const result = (await request("resources/read", {
      uri: "govbr-ds://components/button/accessibility",
    })) as { contents: Array<{ text?: string }> };
    const text = result.contents[0].text;

    expect(text).toContain("# Acessibilidade — Button");
    expect(text).toContain("Use `aria-label`.");
    expect(text).not.toContain("Conteúdo geral exclusivo.");
  });

  it("reads the deterministic catalog", async () => {
    const result = (await request("resources/read", {
      uri: "govbr-ds://catalog",
    })) as { contents: Array<{ text?: string }> };
    const text = result.contents[0].text ?? "";

    expect(text).toContain("2 componentes sincronizados.");
    expect(text.indexOf("[Button]")).toBeLessThan(text.indexOf("[Zeta]"));
    expect(text).toContain("govbr-ds://components/button");
  });

  it.each([
    "govbr-ds://components/missing",
    "govbr-ds://components/zeta/accessibility",
  ])("returns a protocol resource-not-found error for %s", async (uri) => {
    const message = await rawRequest("resources/read", { uri });

    expect(message).toHaveProperty("error.code", -32602);
    expect(message).toHaveProperty("error.data", { uri });
  });
});
