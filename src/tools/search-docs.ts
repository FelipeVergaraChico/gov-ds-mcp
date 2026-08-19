import type { McpServer } from "@modelcontextprotocol/server";
import * as z from "zod/v4";
import {
  SearchComponentNotFoundError,
  type SearchService,
} from "../services/search.service.js";

export function registerSearchDocsTool(
  server: McpServer,
  searchService: SearchService,
): void {
  server.registerTool(
    "search_docs",
    {
      description:
        "Pesquisa na documentação oficial sincronizada do GovBR Design System.",
      inputSchema: z.object({
        query: z
          .string()
          .trim()
          .min(2, "A consulta deve possuir pelo menos 2 caracteres."),
        component: z.string().trim().min(1).optional(),
        limit: z.number().int().min(1).max(20).default(5),
      }),
    },
    async ({ query, component, limit }) => {
      try {
        const results = searchService.search(query, { component, limit });

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                { query, count: results.length, results },
                null,
                2,
              ),
            },
          ],
        };
      } catch (error) {
        if (error instanceof SearchComponentNotFoundError) {
          return {
            isError: true,
            content: [
              {
                type: "text",
                text: JSON.stringify(
                  {
                    query,
                    count: 0,
                    results: [],
                    error: error.message,
                  },
                  null,
                  2,
                ),
              },
            ],
          };
        }

        console.error("Erro ao pesquisar documentação:", error);

        return {
          isError: true,
          content: [
            {
              type: "text",
              text: "Não foi possível pesquisar a documentação.",
            },
          ],
        };
      }
    },
  );
}
