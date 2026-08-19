import type {
  DocumentationSection,
  GovBrComponent,
} from "../types/component.js";

export interface ParsedMarkdownDocument {
  title: string;
  description: string;
  sections: DocumentationSection[];
}

export interface ComponentParserOptions {
  repository: string;
  ref: string;
  documentationPath: string;
  accessibilityPath?: string;
}

interface Heading {
  lineIndex: number;
  level: number;
  title: string;
}

export function parseMarkdownDocument(
  markdown: string,
): ParsedMarkdownDocument {
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n");
  const headings = findHeadings(lines);
  const rootHeading = headings.find((heading) => heading.level === 1);

  if (!rootHeading) {
    return {
      title: "",
      description: cleanContent(lines.join("\n")),
      sections: [],
    };
  }

  const sectionHeadings = headings.filter(
    (heading) => heading.lineIndex > rootHeading.lineIndex && heading.level >= 2,
  );
  const firstSectionLine = sectionHeadings[0]?.lineIndex ?? lines.length;
  const description = cleanContent(
    lines.slice(rootHeading.lineIndex + 1, firstSectionLine).join("\n"),
  );
  const sections = sectionHeadings.map((heading, index) => {
    const nextHeading = sectionHeadings[index + 1];
    const endLine = nextHeading?.lineIndex ?? lines.length;

    return {
      title: stripInlineMarkdown(heading.title),
      level: heading.level,
      content: cleanContent(
        lines.slice(heading.lineIndex + 1, endLine).join("\n"),
      ),
    };
  });

  return {
    title: stripInlineMarkdown(rootHeading.title),
    description,
    sections,
  };
}

export function parseComponent(
  slug: string,
  documentationMarkdown: string,
  accessibilityMarkdown: string | undefined,
  options: ComponentParserOptions,
): GovBrComponent {
  const documentation = parseMarkdownDocument(documentationMarkdown);
  const accessibility = accessibilityMarkdown
    ? parseMarkdownDocument(accessibilityMarkdown).sections
    : [];

  return {
    name: componentNameFromTitle(documentation.title, slug),
    slug,
    description: documentation.description,
    documentationUrl: `https://www.gov.br/ds/components/${slug}`,
    sections: documentation.sections,
    accessibility,
    source: {
      repository: options.repository,
      ref: options.ref,
      documentationPath: options.documentationPath,
      ...(options.accessibilityPath
        ? { accessibilityPath: options.accessibilityPath }
        : {}),
    },
  };
}

function findHeadings(lines: string[]): Heading[] {
  const headings: Heading[] = [];
  let fenceMarker: "```" | "~~~" | undefined;

  lines.forEach((line, lineIndex) => {
    const fence = line.match(/^ {0,3}(```|~~~)/)?.[1] as
      | "```"
      | "~~~"
      | undefined;

    if (fence) {
      if (!fenceMarker) {
        fenceMarker = fence;
      } else if (fence === fenceMarker) {
        fenceMarker = undefined;
      }
      return;
    }

    if (fenceMarker) {
      return;
    }

    const match = line.match(/^(#{1,6})[ \t]+(.+?)[ \t]*#*[ \t]*$/);
    if (!match) {
      return;
    }

    headings.push({
      lineIndex,
      level: match[1].length,
      title: match[2],
    });
  });

  return headings;
}

function cleanContent(content: string): string {
  const lines = content.split("\n");

  while (lines.length > 0 && isDiscardableEdgeLine(lines[0])) {
    lines.shift();
  }
  while (lines.length > 0 && isDiscardableEdgeLine(lines.at(-1) ?? "")) {
    lines.pop();
  }

  return lines.join("\n");
}

function isDiscardableEdgeLine(line: string): boolean {
  return line.trim() === "" || /^ {0,3}((\*|-|_)\s*){3,}$/.test(line);
}

function stripInlineMarkdown(value: string): string {
  return value
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_~`]/g, "")
    .trim();
}

function componentNameFromTitle(title: string, slug: string): string {
  const name = title.split(/\s+\(/, 1)[0].trim();

  if (name) {
    return name;
  }

  return slug
    .split(/[-_]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
