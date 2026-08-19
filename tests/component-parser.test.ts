import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { beforeAll, describe, expect, it } from "vitest";
import {
  parseComponent,
  parseMarkdownDocument,
} from "../src/ingestion/component-parser.js";

const fixture = (name: string) =>
  fileURLToPath(new URL(`./fixtures/${name}`, import.meta.url));

describe("component parser", () => {
  let documentation: string;
  let accessibility: string;

  beforeAll(async () => {
    [documentation, accessibility] = await Promise.all([
      readFile(fixture("button.md"), "utf8"),
      readFile(fixture("button-access.md"), "utf8"),
    ]);
  });

  it("parses the title and initial description", () => {
    const parsed = parseMarkdownDocument(documentation);

    expect(parsed.title).toBe("Button (Botão)");
    expect(parsed.description).toBe(
      "Os botões são elementos interativos da interface.",
    );
  });

  it("parses level 2 and level 3 headings", () => {
    const parsed = parseMarkdownDocument(documentation);

    expect(parsed.sections.map(({ title, level }) => ({ title, level }))).toEqual([
      { title: "Uso", level: 2 },
      { title: "Anatomia", level: 2 },
      { title: "Detalhamento dos Itens", level: 3 },
    ]);
  });

  it("preserves Markdown lists, tables and fenced code", () => {
    const parsed = parseMarkdownDocument(documentation);

    expect(parsed.sections[0].content).toContain("- Salvar alterações.");
    expect(parsed.sections[1].content).toContain("| ID | Nome | Uso |");
    expect(parsed.sections[2].content).toContain("## Isto não é uma seção");
  });

  it("parses accessibility with the same section mechanism", () => {
    const component = parseComponent(
      "button",
      documentation,
      accessibility,
      {
        repository: "govbr-ds/govbr-ds",
        ref: "main",
        documentationPath: "ds/componentes/button/button.md",
        accessibilityPath: "ds/componentes/button/button-access.md",
      },
    );

    expect(component.name).toBe("Button");
    expect(component.accessibility).toHaveLength(2);
    expect(component.accessibility[0].title).toBe("Navegação e Comportamento");
  });

  it("uses an empty accessibility list when the optional file is absent", () => {
    const component = parseComponent("button", documentation, undefined, {
      repository: "govbr-ds/govbr-ds",
      ref: "main",
      documentationPath: "ds/componentes/button/button.md",
    });

    expect(component.accessibility).toEqual([]);
    expect(component.source).not.toHaveProperty("accessibilityPath");
  });
});
