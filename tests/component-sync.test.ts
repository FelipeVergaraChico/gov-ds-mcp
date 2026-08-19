import { describe, expect, it, vi } from "vitest";
import {
  serializeGeneratedComponents,
  sortComponents,
  syncComponents,
  type ComponentSource,
} from "../src/ingestion/component-sync.js";
import type { GovBrComponent } from "../src/types/component.js";

const tree = (name: string) => ({
  id: name,
  name,
  type: "tree" as const,
  path: `ds/componentes/${name}`,
  mode: "040000",
});

const blob = (slug: string, name: string) => ({
  id: name,
  name,
  type: "blob" as const,
  path: `ds/componentes/${slug}/${name}`,
  mode: "100644",
});

describe("component sync", () => {
  it("skips directories without main Markdown and supports missing accessibility", async () => {
    const source: ComponentSource = {
      projectPath: "govbr-ds/govbr-ds",
      ref: "main",
      componentsPath: "ds/componentes",
      listComponentDirectories: async () => [
        tree("undocumented"),
        tree("button"),
      ],
      listDirectoryFiles: async (path) =>
        path.endsWith("button") ? [blob("button", "button.md")] : [],
      getRawFile: async () =>
        "# Button\n\nDescription\n\n## Usage\n\nContent",
    };
    const warn = vi.fn();

    const result = await syncComponents(source, warn);

    expect(result.components.map(({ slug }) => slug)).toEqual(["button"]);
    expect(result.components[0].accessibility).toEqual([]);
    expect(result.skipped).toEqual([
      expect.objectContaining({ slug: "undocumented" }),
    ]);
    expect(warn).toHaveBeenCalledOnce();
  });

  it("sorts generated output deterministically by slug", () => {
    const component = (slug: string): GovBrComponent => ({
      name: slug,
      slug,
      description: "",
      documentationUrl: `https://www.gov.br/ds/components/${slug}`,
      sections: [],
      accessibility: [],
      source: { repository: "repo", ref: "main" },
    });
    const unsorted = [component("menu"), component("button")];
    const serialized = serializeGeneratedComponents(unsorted);

    expect(sortComponents(unsorted).map(({ slug }) => slug)).toEqual([
      "button",
      "menu",
    ]);
    expect(serialized.indexOf('"slug": "button"')).toBeLessThan(
      serialized.indexOf('"slug": "menu"'),
    );
  });
});
