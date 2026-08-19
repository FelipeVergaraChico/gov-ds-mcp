import {
  ProtocolError,
  ProtocolErrorCode,
  completable,
  type GetPromptResult,
} from "@modelcontextprotocol/server";
import * as z from "zod/v4";
import type { ComponentService } from "../services/component.service.js";
import type { GovBrComponent } from "../types/component.js";

const AUTOCOMPLETE_LIMIT = 10;
export const MARKDOWN_MIME_TYPE = "text/markdown";

export function componentArgumentSchema(componentService: ComponentService) {
  return completable(
    z.string().trim().min(1, "O componente é obrigatório."),
    (value) => completeComponentSlugs(componentService, value),
  );
}

export function resolveComponent(
  componentService: ComponentService,
  value: string,
): GovBrComponent {
  const normalizedValue = normalizeComponentIdentifier(value);
  const component = componentService.listComponents().find(
    (candidate) =>
      normalizeComponentIdentifier(candidate.slug) === normalizedValue ||
      normalizeComponentIdentifier(candidate.name) === normalizedValue,
  );

  if (!component) {
    throw new ProtocolError(
      ProtocolErrorCode.InvalidParams,
      `Componente "${value}" não encontrado.`,
    );
  }

  return component;
}

export function requireAccessibility(component: GovBrComponent): void {
  if (component.accessibility.length === 0) {
    throw new ProtocolError(
      ProtocolErrorCode.InvalidParams,
      `Documentação de acessibilidade do componente "${component.slug}" não encontrada.`,
    );
  }
}

export function embeddedMarkdownResource(
  uri: string,
  text: string,
): GetPromptResult["messages"][number] {
  return {
    role: "user",
    content: {
      type: "resource",
      resource: {
        uri,
        mimeType: MARKDOWN_MIME_TYPE,
        text,
      },
    },
  };
}

export function textMessage(text: string): GetPromptResult["messages"][number] {
  return {
    role: "user",
    content: { type: "text", text },
  };
}

export function completeComponentSlugs(
  componentService: ComponentService,
  value: string,
): string[] {
  const normalizedValue = normalizeComponentIdentifier(value);

  return componentService
    .listComponents()
    .filter(
      (component) =>
        normalizeComponentIdentifier(component.slug).startsWith(normalizedValue) ||
        normalizeComponentIdentifier(component.name).startsWith(normalizedValue),
    )
    .sort((a, b) => a.slug.localeCompare(b.slug))
    .slice(0, AUTOCOMPLETE_LIMIT)
    .map(({ slug }) => slug);
}

function normalizeComponentIdentifier(value: string): string {
  return value.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
