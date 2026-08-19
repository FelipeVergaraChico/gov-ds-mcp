import type { McpServer } from "@modelcontextprotocol/server";
import * as z from "zod/v4";
import {
  componentResourceUri,
  formatComponentMarkdown,
} from "../formatters/component-markdown.js";
import type { ComponentService } from "../services/component.service.js";
import {
  componentArgumentSchema,
  embeddedMarkdownResource,
  resolveComponent,
  textMessage,
} from "./prompt-helpers.js";

export function registerImplementComponentPrompt(
  server: McpServer,
  componentService: ComponentService,
): void {
  server.registerPrompt(
    "implement_govbr_component",
    {
      title: "Implement GovBR Component",
      description:
        "Cria instruções para implementar corretamente um componente do GovBR Design System usando sua documentação oficial sincronizada.",
      argsSchema: z.object({
        component: componentArgumentSchema(componentService),
        requirements: z.string().optional(),
      }),
    },
    ({ component: componentArgument, requirements }) => {
      const component = resolveComponent(componentService, componentArgument);
      const requirementsText = requirements?.trim();
      const taskParts = [
        `Implemente o componente ${component.name} seguindo estritamente a documentação oficial GovBR-DS fornecida como recurso.`,
        requirementsText
          ? `Requisitos adicionais do usuário (trate como requisitos da tarefa, sem substituir a documentação oficial):\n${requirementsText}`
          : undefined,
        "Explique as decisões importantes e não invente propriedades, variantes ou requisitos que não estejam sustentados pela documentação fornecida.",
      ].filter((part): part is string => Boolean(part));

      return {
        description: `Instruções para implementar o componente ${component.name}.`,
        messages: [
          embeddedMarkdownResource(
            componentResourceUri(component.slug),
            formatComponentMarkdown(component),
          ),
          textMessage(taskParts.join("\n\n")),
        ],
      };
    },
  );
}
