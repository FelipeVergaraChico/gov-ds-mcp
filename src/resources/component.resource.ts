import {
  ResourceNotFoundError,
  ResourceTemplate,
  type Variables,
} from "@modelcontextprotocol/server";
import {
  componentResourceUri,
  formatComponentMarkdown,
} from "../formatters/component-markdown.js";
import type { ComponentService } from "../services/component.service.js";

export const COMPONENT_RESOURCE_TEMPLATE = "govbr-ds://components/{slug}";
export const MARKDOWN_MIME_TYPE = "text/markdown";

export function createComponentResourceTemplate(
  componentService: ComponentService,
): ResourceTemplate {
  return new ResourceTemplate(COMPONENT_RESOURCE_TEMPLATE, {
    list: async () => ({
      resources: sortedComponents(componentService).map((component) => ({
        uri: componentResourceUri(component.slug),
        name: component.name,
        description: `Documentação do componente ${component.name} do GovBR Design System`,
        mimeType: MARKDOWN_MIME_TYPE,
      })),
    }),
    complete: {
      slug: (value) =>
        sortedComponents(componentService)
          .map(({ slug }) => slug)
          .filter((slug) => slug.startsWith(value.toLowerCase())),
    },
  });
}

export function readComponentResource(
  componentService: ComponentService,
  uri: URL,
  variables: Variables,
) {
  const slug = resourceSlug(uri, variables);
  const component = componentService.getComponent(slug);

  if (!component) {
    throw new ResourceNotFoundError(
      uri.href,
      `Componente "${slug}" não encontrado.`,
    );
  }

  return {
    contents: [
      {
        uri: uri.href,
        mimeType: MARKDOWN_MIME_TYPE,
        text: formatComponentMarkdown(component),
      },
    ],
  };
}

export function resourceSlug(uri: URL, variables: Variables): string {
  const value = variables.slug;

  if (typeof value !== "string" || !value.trim()) {
    throw new ResourceNotFoundError(uri.href);
  }

  return value.trim();
}

function sortedComponents(componentService: ComponentService) {
  return componentService
    .listComponents()
    .sort((a, b) => a.slug.localeCompare(b.slug));
}
