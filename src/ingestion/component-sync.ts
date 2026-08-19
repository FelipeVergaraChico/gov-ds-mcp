import type { GovBrComponent } from "../types/component.js";
import { parseComponent } from "./component-parser.js";
import type { GitLabTreeItem } from "./gitlab-client.js";

export interface ComponentSource {
  readonly projectPath: string;
  readonly ref: string;
  readonly componentsPath: string;
  listComponentDirectories(): Promise<GitLabTreeItem[]>;
  listDirectoryFiles(path: string): Promise<GitLabTreeItem[]>;
  getRawFile(path: string): Promise<string>;
}

export interface SkippedComponent {
  slug: string;
  reason: string;
}

export interface ComponentSyncResult {
  components: GovBrComponent[];
  skipped: SkippedComponent[];
}

export type SyncLogger = (message: string) => void;

export async function syncComponents(
  source: ComponentSource,
  warn: SyncLogger = console.error,
): Promise<ComponentSyncResult> {
  const directories = await source.listComponentDirectories();
  const components: GovBrComponent[] = [];
  const skipped: SkippedComponent[] = [];

  for (const directory of [...directories].sort((a, b) =>
    a.name.localeCompare(b.name),
  )) {
    const slug = directory.name;
    const files = await source.listDirectoryFiles(directory.path);
    const documentationName = `${slug}.md`;
    const accessibilityName = `${slug}-access.md`;
    const documentationFile = files.find(
      (file) => file.name === documentationName,
    );

    if (!documentationFile) {
      const reason = `documentação principal ausente (${documentationName})`;
      skipped.push({ slug, reason });
      warn(`Ignoring component "${slug}": ${reason}.`);
      continue;
    }

    const accessibilityFile = files.find(
      (file) => file.name === accessibilityName,
    );
    const documentationMarkdown = await source.getRawFile(
      documentationFile.path,
    );
    let accessibilityMarkdown: string | undefined;

    if (accessibilityFile) {
      try {
        accessibilityMarkdown = await source.getRawFile(
          accessibilityFile.path,
        );
      } catch (error) {
        warn(
          `Could not download optional accessibility file for "${slug}": ${errorMessage(error)}.`,
        );
      }
    }

    components.push(
      parseComponent(slug, documentationMarkdown, accessibilityMarkdown, {
        repository: source.projectPath,
        ref: source.ref,
        documentationPath: documentationFile.path,
        ...(accessibilityFile
          ? { accessibilityPath: accessibilityFile.path }
          : {}),
      }),
    );
  }

  return {
    components: sortComponents(components),
    skipped,
  };
}

export function sortComponents(
  components: readonly GovBrComponent[],
): GovBrComponent[] {
  return [...components].sort((a, b) => a.slug.localeCompare(b.slug));
}

export function serializeGeneratedComponents(
  components: readonly GovBrComponent[],
): string {
  const sortedComponents = sortComponents(components);

  return `import type { GovBrComponent } from "../types/component.js";\n\n// AUTO-GENERATED FILE.\n// Do not edit manually.\n// Run \`npm run sync:components\` to regenerate.\nexport const generatedComponents: readonly GovBrComponent[] = ${JSON.stringify(sortedComponents, null, 2)};\n`;
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
