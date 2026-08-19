import {
  ResourceNotFoundError,
  ResourceTemplate,
  type Variables,
} from "@modelcontextprotocol/server";
import {
  accessibilityResourceUri,
  formatAccessibilityMarkdown,
} from "../formatters/component-markdown.js";
import type { ComponentService } from "../services/component.service.js";
import {
  MARKDOWN_MIME_TYPE,
  resourceSlug,
} from "./component.resource.js";

export const ACCESSIBILITY_RESOURCE_TEMPLATE =
  "govbr-ds://components/{slug}/accessibility";

export function createAccessibilityResourceTemplate(
  componentService: ComponentService,
): ResourceTemplate {
  return new ResourceTemplate(ACCESSIBILITY_RESOURCE_TEMPLATE, {
    list: async () => ({
      resources: accessibleComponents(componentService).map((component) => ({
        uri: accessibilityResourceUri(component.slug),
        name: `${component.name} — Acessibilidade`,
        description: `Orientações de acessibilidade do componente ${component.name} do GovBR Design System`,
        mimeType: MARKDOWN_MIME_TYPE,
      })),
    }),
    complete: {
      slug: (value) =>
        accessibleComponents(componentService)
          .map(({ slug }) => slug)
          .filter((slug) => slug.startsWith(value.toLowerCase())),
    },
  });
}

export function readAccessibilityResource(
  componentService: ComponentService,
  uri: URL,
  variables: Variables,
) {
  const slug = resourceSlug(uri, variables);
  const component = componentService.getComponent(slug);

  if (!component || component.accessibility.length === 0) {
    throw new ResourceNotFoundError(
      uri.href,
      `Documentação de acessibilidade do componente "${slug}" não encontrada.`,
    );
  }

  return {
    contents: [
      {
        uri: uri.href,
        mimeType: MARKDOWN_MIME_TYPE,
        text: formatAccessibilityMarkdown(component),
      },
    ],
  };
}

function accessibleComponents(componentService: ComponentService) {
  return componentService
    .listComponents()
    .filter((component) => component.accessibility.length > 0)
    .sort((a, b) => a.slug.localeCompare(b.slug));
}
