import type {
  DocumentationSection,
  GovBrComponent,
} from "../types/component.js";

const MIN_SECTION_HEADING_LEVEL = 2;
const MAX_HEADING_LEVEL = 6;
const CATALOG_DESCRIPTION_LIMIT = 240;

export function formatComponentMarkdown(component: GovBrComponent): string {
  const parts = [
    `# ${component.name}`,
    "## Descrição",
    component.description.trim(),
    ...formatSections(component.sections),
    formatSourceFooter(component, component.source.documentationPath),
  ];

  return joinMarkdownParts(parts);
}

export function formatAccessibilityMarkdown(
  component: GovBrComponent,
): string {
  const parts = [
    `# Acessibilidade — ${component.name}`,
    ...formatSections(component.accessibility),
    formatSourceFooter(component, component.source.accessibilityPath),
  ];

  return joinMarkdownParts(parts);
}

export function formatComponentCatalogMarkdown(
  components: readonly GovBrComponent[],
): string {
  const sortedComponents = sortComponents(components);
  const entries = sortedComponents.map((component) => {
    const resourceUri = componentResourceUri(component.slug);
    const description = shortenDescription(component.description);

    return [
      `- [${component.name}](${resourceUri}) — ${description}`,
      `  - Slug: \`${component.slug}\``,
      `  - Resource: ${resourceUri}`,
      `  - Documentação oficial: ${component.documentationUrl}`,
    ].join("\n");
  });

  return joinMarkdownParts([
    "# GovBR Design System — Componentes",
    `${sortedComponents.length} componentes sincronizados.`,
    entries.join("\n"),
  ]);
}

export function componentResourceUri(slug: string): string {
  return `govbr-ds://components/${slug}`;
}

export function accessibilityResourceUri(slug: string): string {
  return `${componentResourceUri(slug)}/accessibility`;
}

function formatSections(sections: readonly DocumentationSection[]): string[] {
  return sections.map((section) => {
    const level = normalizeHeadingLevel(section.level);
    const heading = `${"#".repeat(level)} ${section.title}`;
    const content = section.content.trim();

    return content ? `${heading}\n\n${content}` : heading;
  });
}

function formatSourceFooter(
  component: GovBrComponent,
  sourcePath: string | undefined,
): string {
  const sourceLines = [
    "---",
    `Documentação oficial: ${component.documentationUrl}`,
    "",
    `Fonte: ${component.source.repository} (${component.source.ref})`,
  ];

  if (sourcePath) {
    sourceLines.push(`Caminho: ${sourcePath}`);
  }

  return sourceLines.join("\n");
}

function normalizeHeadingLevel(level: number): number {
  if (!Number.isInteger(level)) {
    return MIN_SECTION_HEADING_LEVEL;
  }

  return Math.min(
    MAX_HEADING_LEVEL,
    Math.max(MIN_SECTION_HEADING_LEVEL, level),
  );
}

function sortComponents(
  components: readonly GovBrComponent[],
): GovBrComponent[] {
  return [...components].sort((a, b) => a.slug.localeCompare(b.slug));
}

function shortenDescription(description: string): string {
  const normalized = description.replace(/\s+/g, " ").trim();

  if (normalized.length <= CATALOG_DESCRIPTION_LIMIT) {
    return normalized;
  }

  return `${normalized.slice(0, CATALOG_DESCRIPTION_LIMIT - 1).trimEnd()}…`;
}

function joinMarkdownParts(parts: readonly string[]): string {
  return `${parts.filter((part) => part.trim()).join("\n\n")}\n`;
}
