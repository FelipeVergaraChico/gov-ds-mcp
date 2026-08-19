import type { McpServer } from "@modelcontextprotocol/server";
import { formatComponentCatalogMarkdown } from "../formatters/component-markdown.js";
import type { ComponentService } from "../services/component.service.js";
import {
  createAccessibilityResourceTemplate,
  readAccessibilityResource,
} from "./accessibility.resource.js";
import {
  createComponentResourceTemplate,
  MARKDOWN_MIME_TYPE,
  readComponentResource,
} from "./component.resource.js";

export const CATALOG_RESOURCE_URI = "govbr-ds://catalog";

export function registerResources(
  server: McpServer,
  componentService: ComponentService,
): void {
  server.registerResource(
    "GovBR Design System Component Catalog",
    CATALOG_RESOURCE_URI,
    {
      description: "Catálogo dos componentes sincronizados do GovBR Design System",
      mimeType: MARKDOWN_MIME_TYPE,
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: MARKDOWN_MIME_TYPE,
          text: formatComponentCatalogMarkdown(
            componentService.listComponents(),
          ),
        },
      ],
    }),
  );

  server.registerResource(
    "GovBR Design System Component Documentation",
    createComponentResourceTemplate(componentService),
    {
      description: "Documentação completa de um componente GovBR Design System",
      mimeType: MARKDOWN_MIME_TYPE,
    },
    async (uri, variables) =>
      readComponentResource(componentService, uri, variables),
  );

  server.registerResource(
    "GovBR Design System Component Accessibility",
    createAccessibilityResourceTemplate(componentService),
    {
      description: "Orientações de acessibilidade de um componente GovBR Design System",
      mimeType: MARKDOWN_MIME_TYPE,
    },
    async (uri, variables) =>
      readAccessibilityResource(componentService, uri, variables),
  );
}
