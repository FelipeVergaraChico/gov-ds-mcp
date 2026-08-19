import { describe, expect, it } from "vitest";
import {
  formatAccessibilityMarkdown,
  formatComponentCatalogMarkdown,
  formatComponentMarkdown,
} from "../src/formatters/component-markdown.js";
import type { GovBrComponent } from "../src/types/component.js";

const button: GovBrComponent = {
  name: "Button",
  slug: "button",
  description: "Executa ações na interface.",
  documentationUrl: "https://www.gov.br/ds/components/button",
  sections: [
    {
      title: "Uso",
      level: 2,
      content: "Preserva **Markdown**, listas e [links](/referencia).",
    },
    {
      title: "Detalhes",
      level: 3,
      content: "- Item um\n- Item dois",
    },
  ],
  accessibility: [
    {
      title: "Código",
      level: 2,
      content: "Use `aria-label`.",
    },
  ],
  source: {
    repository: "govbr-ds/govbr-ds",
    ref: "main",
    documentationPath: "ds/componentes/button/button.md",
    accessibilityPath: "ds/componentes/button/button-access.md",
  },
};

describe("component Markdown formatter", () => {
  it("formats title, description and heading levels", () => {
    const markdown = formatComponentMarkdown(button);

    expect(markdown).toContain("# Button");
    expect(markdown).toContain("## Descrição\n\nExecuta ações na interface.");
    expect(markdown).toContain("## Uso");
    expect(markdown).toContain("### Detalhes");
  });

  it("preserves section Markdown", () => {
    const markdown = formatComponentMarkdown(button);

    expect(markdown).toContain("Preserva **Markdown**, listas e [links](/referencia).");
    expect(markdown).toContain("- Item um\n- Item dois");
  });

  it("clamps unexpected heading levels to valid Markdown", () => {
    const markdown = formatComponentMarkdown({
      ...button,
      sections: [
        { title: "Muito baixo", level: 0, content: "Baixo" },
        { title: "Muito alto", level: 9, content: "Alto" },
      ],
    });

    expect(markdown).toContain("## Muito baixo");
    expect(markdown).toContain("###### Muito alto");
    expect(markdown).not.toContain("####### Muito alto");
  });

  it("includes official documentation and source metadata", () => {
    const markdown = formatComponentMarkdown(button);

    expect(markdown).toContain(button.documentationUrl);
    expect(markdown).toContain("govbr-ds/govbr-ds (main)");
    expect(markdown).toContain("ds/componentes/button/button.md");
  });

  it("formats accessibility without general sections", () => {
    const markdown = formatAccessibilityMarkdown(button);

    expect(markdown).toContain("# Acessibilidade — Button");
    expect(markdown).toContain("## Código");
    expect(markdown).toContain("Use `aria-label`.");
    expect(markdown).not.toContain("## Uso");
    expect(markdown).not.toContain("Executa ações na interface.");
  });

  it("builds a deterministic catalog without a fixed component count", () => {
    const accordion = {
      ...button,
      name: "Accordion",
      slug: "accordion",
      documentationUrl: "https://www.gov.br/ds/components/accordion",
    };
    const markdown = formatComponentCatalogMarkdown([button, accordion]);

    expect(markdown).toContain("2 componentes sincronizados.");
    expect(markdown.indexOf("[Accordion]")).toBeLessThan(
      markdown.indexOf("[Button]"),
    );
    expect(markdown).toContain("govbr-ds://components/button");
    expect(markdown).toContain(button.documentationUrl);
  });
});
