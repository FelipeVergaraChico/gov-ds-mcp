export const GITLAB_BASE_URL = "https://gitlab.com/api/v4";
export const PROJECT_PATH = "govbr-ds/govbr-ds";
export const DEFAULT_REF = "main";
export const COMPONENTS_PATH = "ds/componentes";

const ITEMS_PER_PAGE = 100;

export interface GitLabTreeItem {
  id: string;
  name: string;
  type: "blob" | "tree";
  path: string;
  mode: string;
}

export interface GitLabClientOptions {
  baseUrl?: string;
  projectPath?: string;
  ref?: string;
  componentsPath?: string;
  fetchImpl?: typeof fetch;
}

export class GitLabApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly url: string,
  ) {
    super(message);
    this.name = "GitLabApiError";
  }
}

export class GitLabClient {
  readonly projectPath: string;
  readonly ref: string;
  readonly componentsPath: string;

  private readonly baseUrl: string;
  private readonly fetchImpl: typeof fetch;

  constructor(options: GitLabClientOptions = {}) {
    this.baseUrl = (options.baseUrl ?? GITLAB_BASE_URL).replace(/\/$/, "");
    this.projectPath = options.projectPath ?? PROJECT_PATH;
    this.ref = options.ref ?? DEFAULT_REF;
    this.componentsPath = options.componentsPath ?? COMPONENTS_PATH;
    this.fetchImpl = options.fetchImpl ?? fetch;
  }

  async listComponentDirectories(): Promise<GitLabTreeItem[]> {
    const entries = await this.listDirectoryEntries(this.componentsPath);

    return entries.filter((entry) => entry.type === "tree");
  }

  async listDirectoryFiles(path: string): Promise<GitLabTreeItem[]> {
    const entries = await this.listDirectoryEntries(path);

    return entries.filter((entry) => entry.type === "blob");
  }

  async getRawFile(path: string): Promise<string> {
    const url = new URL(
      `${this.baseUrl}/projects/${encodeURIComponent(this.projectPath)}/repository/files/${encodeURIComponent(path)}/raw`,
    );
    url.searchParams.set("ref", this.ref);

    const response = await this.fetchImpl(url);
    await this.assertSuccessful(response, url);

    return response.text();
  }

  private async listDirectoryEntries(path: string): Promise<GitLabTreeItem[]> {
    const entries: GitLabTreeItem[] = [];
    let page = 1;

    while (true) {
      const url = new URL(
        `${this.baseUrl}/projects/${encodeURIComponent(this.projectPath)}/repository/tree`,
      );
      url.searchParams.set("path", path);
      url.searchParams.set("ref", this.ref);
      url.searchParams.set("per_page", String(ITEMS_PER_PAGE));
      url.searchParams.set("page", String(page));

      const response = await this.fetchImpl(url);
      await this.assertSuccessful(response, url);

      const body: unknown = await response.json();
      if (!Array.isArray(body)) {
        throw new GitLabApiError(
          "A API do GitLab retornou uma listagem inválida.",
          response.status,
          url.toString(),
        );
      }

      const pageEntries = body as GitLabTreeItem[];
      entries.push(...pageEntries);

      const nextPage = response.headers.get("x-next-page");
      if (nextPage) {
        page = Number(nextPage);
        continue;
      }

      if (pageEntries.length === ITEMS_PER_PAGE) {
        page += 1;
        continue;
      }

      break;
    }

    return entries;
  }

  private async assertSuccessful(response: Response, url: URL): Promise<void> {
    if (response.ok) {
      return;
    }

    const details = await response.text().catch(() => "");
    const suffix = details ? `: ${details.slice(0, 300)}` : "";

    throw new GitLabApiError(
      `Falha na API do GitLab (${response.status} ${response.statusText})${suffix}`,
      response.status,
      url.toString(),
    );
  }
}
