import { describe, expect, it } from "vitest";
import {
  SearchComponentNotFoundError,
  SearchService,
  canonicalizeToken,
  normalizeText,
  tokenizeQuery,
} from "../src/services/search.service.js";
import type { GovBrComponent } from "../src/types/component.js";

const longContent = `${"Contexto anterior. ".repeat(30)}termo especial aparece aqui. ${"Contexto posterior. ".repeat(30)}`;

const components: GovBrComponent[] = [
  {
    name: "Button",
    slug: "button",
    description: "O Botão permite executar ações importantes na interface.",
    documentationUrl: "https://www.gov.br/ds/components/button",
    sections: [
      {
        title: "Uso",
        level: 2,
        content:
          "![Exemplo Botão](imagens/button-description.png)\n*Exemplo de botão*\n\nUtilize o botão no desktop próximo ao conteúdo relacionado.",
      },
      {
        title: "Botão Circular",
        level: 2,
        content: "O botão circular comunica sua ação por meio de um ícone.",
      },
      {
        title: "Repetições",
        level: 2,
        content: "botão usar ".repeat(20),
      },
    ],
    accessibility: [
      {
        title: "Recomendações para Código",
        level: 2,
        content:
          "Um botão somente ícone precisa de aria-label para acessibilidade.",
      },
    ],
    source: { repository: "repo", ref: "main" },
  },
  {
    name: "Menu de Navegação",
    slug: "menu",
    description: "O menu organiza os destinos principais do sistema.",
    documentationUrl: "https://www.gov.br/ds/components/menu",
    sections: [
      {
        title: "Desktop",
        level: 2,
        content:
          "Em desktop, o menu pode permanecer em um painel lateral visível.",
      },
      {
        title: "Botão Fechar",
        level: 2,
        content: "O botão fecha o menu lateral.",
      },
    ],
    accessibility: [],
    source: { repository: "repo", ref: "main" },
  },
  {
    name: "Input",
    slug: "input",
    description: "Campo para entrada de dados.",
    documentationUrl: "https://www.gov.br/ds/components/input",
    sections: [
      {
        title: "Validação",
        level: 2,
        content: "Indique claramente quando o campo é obrigatório.",
      },
      {
        title: "Conteúdo Extenso",
        level: 2,
        content: longContent,
      },
    ],
    accessibility: [],
    source: { repository: "repo", ref: "main" },
  },
  {
    name: "Magic Button",
    slug: "magicbutton",
    description: "Ação especial em destaque.",
    documentationUrl: "https://www.gov.br/ds/components/magicbutton",
    sections: [],
    accessibility: [],
    source: { repository: "repo", ref: "main" },
  },
];

describe("SearchService", () => {
  const service = new SearchService(components);

  it("searches by component name", () => {
    expect(service.search("magic button")[0]).toEqual(
      expect.objectContaining({ slug: "magicbutton", type: "description" }),
    );
  });

  it("searches by exact slug", () => {
    expect(service.search("magicbutton")[0]).toEqual(
      expect.objectContaining({ slug: "magicbutton" }),
    );
  });

  it("searches inside a documentation section", () => {
    expect(service.search("painel lateral")[0]).toEqual(
      expect.objectContaining({
        slug: "menu",
        type: "section",
        title: "Desktop",
      }),
    );
  });

  it("searches inside accessibility documentation", () => {
    expect(service.search("aria-label")[0]).toEqual(
      expect.objectContaining({
        slug: "button",
        type: "accessibility",
        title: "Recomendações para Código",
      }),
    );
  });

  it("is case-insensitive", () => {
    expect(service.search("DESKTOP")[0].title).toBe("Desktop");
  });

  it("is accent-insensitive", () => {
    expect(normalizeText("Botão")).toBe("botao");
    expect(service.search("botao")[0].slug).toBe("button");
  });

  it.each([
    ["usar", "uso"],
    ["utilizando", "uso"],
    ["acessível", "acessibilidade"],
    ["obrigatória", "obrigatorio"],
  ])("canonicalizes %s to %s", (variation, canonical) => {
    expect(canonicalizeToken(variation)).toBe(canonical);
  });

  it.each(["botão", "botao"])(
    "identifies Button through the %s alias",
    (query) => {
      expect(service.search(query)[0].slug).toBe("button");
    },
  );

  it("removes Portuguese stopwords without removing relevant terms", () => {
    expect(tokenizeQuery("como eu uso o botão")).toEqual(["uso", "botao"]);
    expect(tokenizeQuery("menu desktop acessibilidade")).toEqual([
      "menu",
      "desktop",
      "acessibilidade",
    ]);
  });

  it("tokenizes multiple terms and does not require all of them", () => {
    expect(tokenizeQuery("  menu   desktop menu ")).toEqual([
      "menu",
      "desktop",
    ]);

    const results = service.search("menu inexistente");
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].slug).toBe("menu");
  });

  it("ranks results matching more terms above partial matches", () => {
    const results = service.search("button aria-label", { limit: 20 });

    expect(results[0]).toEqual(
      expect.objectContaining({ slug: "button", type: "accessibility" }),
    );
    expect(results[0].score).toBeGreaterThan(
      results.find((result) => result.slug === "menu")?.score ?? 0,
    );
  });

  it("prioritizes an explicitly mentioned component", () => {
    const results = service.search("botao", { limit: 20 });
    const buttonResult = results.find((result) => result.slug === "button");
    const menuResult = results.find((result) => result.slug === "menu");

    expect(buttonResult?.score).toBeGreaterThan(menuResult?.score ?? 0);
  });

  it("regresses natural-language Button usage ranking", () => {
    const results = service.search("como eu uso o botão", { limit: 5 });

    expect(results[0]).toEqual(
      expect.objectContaining({ slug: "button", title: "Uso" }),
    );
    expect(results[0].snippet).not.toMatch(/^!\[/);
    expect(results[0].snippet).toMatch(/^Utilize o botão/);
  });

  it("prioritizes Button usage for an infinitive natural-language query", () => {
    const results = service.search("como usar um botão", { limit: 5 });

    expect(results[0]).toEqual(
      expect.objectContaining({ slug: "button", title: "Uso" }),
    );
  });

  it("boosts an exact canonical title match", () => {
    const results = service.search("utilizando", { limit: 20 });

    expect(results[0]).toEqual(
      expect.objectContaining({ slug: "button", title: "Uso" }),
    );
  });

  it("does not let repeated terms dominate an exact intent title", () => {
    const results = service.search("como usar um botão", { limit: 20 });
    const repeatedResult = results.find(
      (result) => result.title === "Repetições",
    );

    expect(results[0].title).toBe("Uso");
    expect(results[0].score).toBeGreaterThan(repeatedResult?.score ?? 0);
  });

  it("prioritizes the circular button section for botão circular", () => {
    expect(service.search("botão circular")[0]).toEqual(
      expect.objectContaining({ slug: "button", title: "Botão Circular" }),
    );
  });

  it("keeps ARIA accessibility content above usage", () => {
    expect(service.search("botão aria")[0]).toEqual(
      expect.objectContaining({
        slug: "button",
        type: "accessibility",
        title: "Recomendações para Código",
      }),
    );
  });

  it("does not let another component mentioning botão outrank Button", () => {
    const results = service.search("uso botao", { limit: 20 });
    const closeButtonResult = results.find(
      (result) => result.slug === "menu" && result.title === "Botão Fechar",
    );

    expect(results[0]).toEqual(
      expect.objectContaining({ slug: "button", title: "Uso" }),
    );
    expect(results[0].score).toBeGreaterThan(closeButtonResult?.score ?? 0);
  });

  it("continues to prioritize Menu for a short technical query", () => {
    expect(service.search("menu")[0].slug).toBe("menu");
  });

  it("prioritizes title matches over content-only matches", () => {
    const results = service.search("desktop", { limit: 20 });

    expect(results[0]).toEqual(
      expect.objectContaining({ slug: "menu", title: "Desktop" }),
    );
  });

  it("respects the result limit", () => {
    expect(service.search("button", { limit: 1 })).toHaveLength(1);
  });

  it("filters by component case-insensitively", () => {
    const results = service.search("desktop", { component: "BuTtOn" });

    expect(results).not.toHaveLength(0);
    expect(results.every(({ slug }) => slug === "button")).toBe(true);
  });

  it("reports an unknown component filter", () => {
    expect(() =>
      service.search("desktop", { component: "missing" }),
    ).toThrow(SearchComponentNotFoundError);
  });

  it("returns an empty list when there are no matches", () => {
    expect(service.search("xyzabc123")).toEqual([]);
  });

  it("creates a short snippet around the matched occurrence", () => {
    const result = service.search("especial", { component: "input" })[0];

    expect(result.snippet).toContain("termo especial aparece aqui");
    expect(result.snippet.length).toBeLessThanOrEqual(302);
    expect(result.snippet.startsWith("…")).toBe(true);
    expect(result.snippet.endsWith("…")).toBe(true);
  });
});
