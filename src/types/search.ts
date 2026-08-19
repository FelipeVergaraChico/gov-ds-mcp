export type SearchResultType =
  | "description"
  | "section"
  | "accessibility";

export interface SearchOptions {
  component?: string;
  limit?: number;
}

export interface SearchResult {
  component: string;
  slug: string;
  type: SearchResultType;
  title: string;
  snippet: string;
  score: number;
  documentationUrl: string;
}
