import type { McpServer } from "@modelcontextprotocol/server";
import * as z from "zod/v4";
import type { ComponentService } from "../services/component.service.js";

export function registerGetComponentTool(
  server: McpServer,
  componentService: ComponentService,
): void {
  server.registerTool(
    "get_component",
    {
      description:
        "Obtém a documentação oficial sincronizada completa de um componente do GovBR Design System. " +
        "Use quando já souber qual componente GovBR-DS precisa consultar.",
      inputSchema: z.object({
        name: z.string().min(1, "O nome do componente é obrigatório."),
      }),
    },
    async ({ name }) => {
      try {
        const component = componentService.getComponent(name);

        if (!component) {
          return {
            isError: true,
            content: [
              {
                type: "text",
                text: `Componente "${name}" não encontrado.`,
              },
            ],
          };
        }

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(component, null, 2),
            },
          ],
        };
      } catch (error) {
        console.error("Erro ao consultar componente:", error);

        return {
          isError: true,
          content: [
            {
              type: "text",
              text: "Não foi possível consultar o componente.",
            },
          ],
        };
      }
    },
  );
}
