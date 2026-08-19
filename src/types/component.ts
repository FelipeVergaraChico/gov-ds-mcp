export interface DocumentationSection {
  title: string;
  level: number;
  content: string;
}

export interface GovBrComponent {
  name: string;
  slug: string;
  description: string;
  documentationUrl: string;
  sections: DocumentationSection[];
  accessibility: DocumentationSection[];
  source: {
    repository: string;
    ref: string;
    documentationPath?: string;
    accessibilityPath?: string;
  };
}
