import type { McpServer } from "@modelcontextprotocol/server";
import * as z from "zod/v4";
import type { ComponentService } from "../services/component.service.js";

export function registerListComponentsTool(
  server: McpServer,
  componentService: ComponentService,
): void {
  server.registerTool(
    "list_components",
    {
      description:
        "Lista os componentes documentados do GovBR Design System disponíveis neste servidor. " +
        "Use para descobrir quais componentes GovBR-DS podem ser consultados.",
      inputSchema: z.object({}),
    },
    async () => {
      const summaries = componentService
        .listComponents()
        .map(({ name, slug, description }) => ({ name, slug, description }));

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(summaries, null, 2),
          },
        ],
      };
    },
  );
}
