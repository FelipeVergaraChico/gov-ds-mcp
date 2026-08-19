import { mkdir, rename, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  serializeGeneratedComponents,
  syncComponents,
} from "../src/ingestion/component-sync.js";
import { GitLabClient } from "../src/ingestion/gitlab-client.js";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const outputPath = resolve(
  scriptDirectory,
  "../src/data/components.generated.ts",
);
const temporaryPath = `${outputPath}.tmp`;

async function main(): Promise<void> {
  const client = new GitLabClient();
  const result = await syncComponents(client);
  const source = serializeGeneratedComponents(result.components);

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(temporaryPath, source, "utf8");
  await rename(temporaryPath, outputPath);

  console.error(`Synced ${result.components.length} components.`);
  console.error(
    `Skipped ${result.skipped.length} components without Markdown documentation.`,
  );
}

main().catch((error: unknown) => {
  console.error("Component synchronization failed:", error);
  process.exitCode = 1;
});
