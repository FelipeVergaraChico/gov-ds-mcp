import type { GovBrComponent } from "../types/component.js";
import type {
  SearchOptions,
  SearchResult,
  SearchResultType,
} from "../types/search.js";

const DEFAULT_LIMIT = 5;
const MAX_LIMIT = 20;
const SNIPPET_LENGTH = 300;
const SNIPPET_BOUNDARY_WINDOW = 40;
const SCORE_EXACT_SLUG = 100;
const SCORE_COMPONENT_NAME = 50;
const SCORE_DOCUMENT_TITLE = 30;
const SCORE_DOCUMENT_CONTENT = 10;
const SCORE_MENTIONED_COMPONENT = 200;
const SCORE_TERM_COVERAGE_MAX = 100;
const SCORE_EXACT_CANONICAL_TITLE = 120;

export const PORTUGUESE_SEARCH_STOPWORDS = new Set([
  "como",
  "eu",
  "o",
  "a",
  "os",
  "as",
  "de",
  "da",
  "do",
  "das",
  "dos",
  "em",
  "no",
  "na",
  "nos",
  "nas",
  "um",
  "uma",
  "para",
  "por",
  "com",
  "que",
  "e",
]);

export type ComponentSearchAliases = Readonly<
  Record<string, readonly string[]>
>;

export const DEFAULT_COMPONENT_SEARCH_ALIASES: ComponentSearchAliases = {
  button: ["botão", "botao"],
};

export const TOKEN_CANONICALIZATION_GROUPS = {
  uso: [
    "uso",
    "usar",
    "usando",
    "usado",
    "usada",
    "utilizar",
    "utilizando",
    "utilizado",
    "utilizada",
  ],
  acessibilidade: ["acessibilidade", "acessivel", "acessiveis"],
  obrigatorio: [
    "obrigatorio",
    "obrigatoria",
    "obrigatorios",
    "obrigatorias",
  ],
} as const;

const TOKEN_CANONICALIZATION_MAP = buildTokenCanonicalizationMap();

interface IndexedDocument {
  component: string;
  slug: string;
  type: SearchResultType;
  title: string;
  content: string;
  documentationUrl: string;
  canonicalSlug: string;
  componentTokens: ReadonlySet<string>;
  titleTokens: ReadonlySet<string>;
  contentTokens: ReadonlySet<string>;
  canonicalTitle: string;
  order: number;
}

interface RankedResult {
  result: SearchResult;
  matchedTermCount: number;
  order: number;
}

interface MentionedComponents {
  slugs: ReadonlySet<string>;
  termsBySlug: ReadonlyMap<string, ReadonlySet<string>>;
}

export class SearchComponentNotFoundError extends Error {
  constructor(public readonly component: string) {
    super(`Componente "${component}" não encontrado.`);
    this.name = "SearchComponentNotFoundError";
  }
}

export class SearchService {
  private readonly documents: readonly IndexedDocument[];
  private readonly componentSlugsByIdentifier: ReadonlyMap<string, string>;

  constructor(
    components: readonly GovBrComponent[],
    aliases: ComponentSearchAliases = DEFAULT_COMPONENT_SEARCH_ALIASES,
  ) {
    this.documents = buildIndex(components);
    this.componentSlugsByIdentifier = buildComponentIdentifierMap(
      components,
      aliases,
    );
  }

  search(query: string, options: SearchOptions = {}): SearchResult[] {
    const terms = tokenizeQuery(query);
    if (terms.length === 0) {
      return [];
    }

    const filteredSlug = options.component
      ? this.resolveComponentSlug(options.component)
      : undefined;
    const mentionedComponents = identifyMentionedComponents(
      query,
      terms,
      this.componentSlugsByIdentifier,
    );
    const limit = normalizeLimit(options.limit);
    const rankedResults: RankedResult[] = [];

    for (const document of this.documents) {
      if (filteredSlug && document.slug !== filteredSlug) {
        continue;
      }

      const { score, matchedTerms } = scoreDocument(
        document,
        terms,
        mentionedComponents,
      );
      if (matchedTerms.length === 0) {
        continue;
      }

      rankedResults.push({
        result: {
          component: document.component,
          slug: document.slug,
          type: document.type,
          title: document.title,
          snippet: createSnippet(document.content, matchedTerms),
          score,
          documentationUrl: document.documentationUrl,
        },
        matchedTermCount: matchedTerms.length,
        order: document.order,
      });
    }

    return rankedResults
      .sort(
        (a, b) =>
          b.result.score - a.result.score ||
          b.matchedTermCount - a.matchedTermCount ||
          a.order - b.order,
      )
      .slice(0, limit)
      .map(({ result }) => result);
  }

  private resolveComponentSlug(component: string): string {
    const slug = this.componentSlugsByIdentifier.get(
      normalizeText(component).trim(),
    );

    if (!slug) {
      throw new SearchComponentNotFoundError(component);
    }

    return slug;
  }
}

export function normalizeText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function tokenizeQuery(query: string): string[] {
  return [
    ...new Set(
      extractNormalizedTokens(query)
        .filter(
          (term) => term && !PORTUGUESE_SEARCH_STOPWORDS.has(term),
        )
        .map(canonicalizeToken),
    ),
  ];
}

export function canonicalizeToken(token: string): string {
  const normalizedToken = normalizeText(token).trim();

  return TOKEN_CANONICALIZATION_MAP.get(normalizedToken) ?? normalizedToken;
}

function extractNormalizedTokens(value: string): string[] {
  return normalizeText(value).match(/[a-z0-9]+/g) ?? [];
}

function canonicalizeTextTokens(value: string): string[] {
  return extractNormalizedTokens(value).map(canonicalizeToken);
}

function buildTokenCanonicalizationMap(): ReadonlyMap<string, string> {
  const canonicalization = new Map<string, string>();

  for (const [canonicalToken, variations] of Object.entries(
    TOKEN_CANONICALIZATION_GROUPS,
  )) {
    for (const variation of variations) {
      canonicalization.set(normalizeText(variation), canonicalToken);
    }
  }

  return canonicalization;
}

function buildIndex(
  components: readonly GovBrComponent[],
): readonly IndexedDocument[] {
  const documents: IndexedDocument[] = [];

  for (const component of components) {
    documents.push(
      createIndexedDocument(
        component,
        "description",
        component.name,
        component.description,
        documents.length,
      ),
    );

    for (const section of component.sections) {
      documents.push(
        createIndexedDocument(
          component,
          "section",
          section.title,
          section.content,
          documents.length,
        ),
      );
    }

    for (const section of component.accessibility) {
      documents.push(
        createIndexedDocument(
          component,
          "accessibility",
          section.title,
          section.content,
          documents.length,
        ),
      );
    }
  }

  return documents;
}

function createIndexedDocument(
  component: GovBrComponent,
  type: SearchResultType,
  title: string,
  content: string,
  order: number,
): IndexedDocument {
  return {
    component: component.name,
    slug: component.slug,
    type,
    title,
    content,
    documentationUrl: component.documentationUrl,
    canonicalSlug: canonicalizeTextTokens(component.slug).join(" "),
    componentTokens: new Set(canonicalizeTextTokens(component.name)),
    titleTokens: new Set(canonicalizeTextTokens(title)),
    contentTokens: new Set(canonicalizeTextTokens(content)),
    canonicalTitle: canonicalizeTextTokens(title).join(" "),
    order,
  };
}

function buildComponentIdentifierMap(
  components: readonly GovBrComponent[],
  aliases: ComponentSearchAliases,
): ReadonlyMap<string, string> {
  const identifiers = new Map<string, string>();

  for (const component of components) {
    identifiers.set(normalizeText(component.slug), component.slug);
    identifiers.set(normalizeText(component.name), component.slug);
    identifiers.set(
      canonicalizeTextTokens(component.slug).join(" "),
      component.slug,
    );
    identifiers.set(
      canonicalizeTextTokens(component.name).join(" "),
      component.slug,
    );

    for (const alias of aliases[component.slug] ?? []) {
      identifiers.set(normalizeText(alias), component.slug);
      identifiers.set(
        canonicalizeTextTokens(alias).join(" "),
        component.slug,
      );
    }
  }

  return identifiers;
}

function identifyMentionedComponents(
  query: string,
  terms: readonly string[],
  identifiers: ReadonlyMap<string, string>,
): MentionedComponents {
  const slugs = new Set<string>();
  const termsBySlug = new Map<string, Set<string>>();
  const addMention = (slug: string, matchedTerms: readonly string[]) => {
    slugs.add(slug);
    const componentTerms = termsBySlug.get(slug) ?? new Set<string>();

    for (const term of matchedTerms) {
      componentTerms.add(term);
    }

    termsBySlug.set(slug, componentTerms);
  };

  const completeIdentifier = normalizeText(query).trim();
  const completeMatch = identifiers.get(completeIdentifier);
  if (completeMatch) {
    addMention(completeMatch, terms);
  }

  for (const term of terms) {
    const slug = identifiers.get(term);
    if (slug) {
      addMention(slug, [term]);
    }
  }

  return { slugs, termsBySlug };
}

function scoreDocument(
  document: IndexedDocument,
  terms: readonly string[],
  mentionedComponents: MentionedComponents,
): { score: number; matchedTerms: string[] } {
  let score = 0;
  const matchedTerms: string[] = [];
  const mentionedTerms = mentionedComponents.termsBySlug.get(document.slug);

  if (mentionedComponents.slugs.has(document.slug)) {
    score += SCORE_MENTIONED_COMPONENT;
  }

  for (const term of terms) {
    let matched = mentionedTerms?.has(term) ?? false;

    if (document.canonicalSlug === term) {
      score += SCORE_EXACT_SLUG;
      matched = true;
    }
    if (document.componentTokens.has(term)) {
      score += SCORE_COMPONENT_NAME;
      matched = true;
    }
    if (document.titleTokens.has(term)) {
      score += SCORE_DOCUMENT_TITLE;
      matched = true;
    }
    if (
      document.type !== "description" &&
      document.canonicalTitle === term
    ) {
      score += SCORE_EXACT_CANONICAL_TITLE;
      matched = true;
    }
    if (document.contentTokens.has(term)) {
      score += SCORE_DOCUMENT_CONTENT;
      matched = true;
    }

    if (matched) {
      matchedTerms.push(term);
    }
  }

  score += Math.round(
    (matchedTerms.length / terms.length) * SCORE_TERM_COVERAGE_MAX,
  );

  return { score, matchedTerms };
}

function createSnippet(content: string, matchedTerms: readonly string[]): string {
  const source = removeLeadingMarkdownMedia(content);
  if (source.length <= SNIPPET_LENGTH) {
    return source;
  }

  const occurrence = matchedTerms.reduce((earliest, term) => {
    const index = findCanonicalTokenOccurrence(source, term);

    return index >= 0 && (earliest < 0 || index < earliest) ? index : earliest;
  }, -1);
  const matchPosition = occurrence >= 0 ? occurrence : 0;
  let start = Math.max(0, matchPosition - Math.floor(SNIPPET_LENGTH / 3));
  let end = Math.min(source.length, start + SNIPPET_LENGTH);

  if (end === source.length) {
    start = Math.max(0, end - SNIPPET_LENGTH);
  }

  start = moveStartToBoundary(source, start);
  end = moveEndToBoundary(source, end);

  const prefix = start > 0 ? "…" : "";
  const suffix = end < source.length ? "…" : "";

  return `${prefix}${source.slice(start, end).trim()}${suffix}`;
}

function findCanonicalTokenOccurrence(content: string, term: string): number {
  const tokenPattern = /[\p{L}\p{N}]+/gu;
  let match: RegExpExecArray | null;

  while ((match = tokenPattern.exec(content)) !== null) {
    if (canonicalizeToken(match[0]) === term) {
      return match.index;
    }
  }

  return -1;
}

function removeLeadingMarkdownMedia(content: string): string {
  const lines = content.trim().split("\n");
  let firstContentLine = 0;

  while (firstContentLine < lines.length) {
    while (
      firstContentLine < lines.length &&
      lines[firstContentLine].trim() === ""
    ) {
      firstContentLine += 1;
    }

    if (
      !/^\s*!\[[^\]]*\]\([^)]*\)\s*$/.test(lines[firstContentLine] ?? "")
    ) {
      break;
    }

    firstContentLine += 1;
    while (
      firstContentLine < lines.length &&
      lines[firstContentLine].trim() === ""
    ) {
      firstContentLine += 1;
    }

    if (/^\s*([*_]).+\1\s*$/.test(lines[firstContentLine] ?? "")) {
      firstContentLine += 1;
    }
  }

  return lines.slice(firstContentLine).join("\n").trim();
}

function moveStartToBoundary(content: string, start: number): number {
  if (start === 0) {
    return start;
  }

  const boundary = content
    .slice(start, start + SNIPPET_BOUNDARY_WINDOW)
    .search(/\s/);

  return boundary >= 0 ? start + boundary + 1 : start;
}

function moveEndToBoundary(content: string, end: number): number {
  if (end === content.length) {
    return end;
  }

  const windowStart = Math.max(0, end - SNIPPET_BOUNDARY_WINDOW);
  const window = content.slice(windowStart, end);
  const boundary = Math.max(
    window.lastIndexOf(" "),
    window.lastIndexOf("\n"),
    window.lastIndexOf("\t"),
  );

  return boundary >= 0 ? windowStart + boundary : end;
}

function normalizeLimit(limit: number | undefined): number {
  if (limit === undefined || !Number.isFinite(limit)) {
    return DEFAULT_LIMIT;
  }

  return Math.min(MAX_LIMIT, Math.max(1, Math.trunc(limit)));
}
