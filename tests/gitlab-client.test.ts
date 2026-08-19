import { describe, expect, it, vi } from "vitest";
import {
  GitLabApiError,
  GitLabClient,
} from "../src/ingestion/gitlab-client.js";

describe("GitLabClient", () => {
  it("encodes project, directory and file paths", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify([
            {
              id: "1",
              name: "button",
              type: "tree",
              path: "ds/componentes/button",
              mode: "040000",
            },
          ]),
          { status: 200 },
        ),
      )
      .mockResolvedValueOnce(new Response("# Button", { status: 200 }));
    const client = new GitLabClient({ fetchImpl: fetchMock });

    await client.listComponentDirectories();
    await client.getRawFile("ds/componentes/button/button.md");

    expect(String(fetchMock.mock.calls[0][0])).toContain(
      "projects/govbr-ds%2Fgovbr-ds/repository/tree",
    );
    expect(String(fetchMock.mock.calls[0][0])).toContain(
      "path=ds%2Fcomponentes",
    );
    expect(String(fetchMock.mock.calls[1][0])).toContain(
      "files/ds%2Fcomponentes%2Fbutton%2Fbutton.md/raw",
    );
  });

  it("filters directory listings to files", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(
      new Response(
        JSON.stringify([
          {
            id: "1",
            name: "imagens",
            type: "tree",
            path: "x/imagens",
            mode: "040000",
          },
          {
            id: "2",
            name: "button.md",
            type: "blob",
            path: "x/button.md",
            mode: "100644",
          },
        ]),
        { status: 200 },
      ),
    );

    const files = await new GitLabClient({
      fetchImpl: fetchMock,
    }).listDirectoryFiles("x");

    expect(files.map((file) => file.name)).toEqual(["button.md"]);
  });

  it("throws a descriptive error for invalid HTTP responses", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(
      new Response("not found", { status: 404, statusText: "Not Found" }),
    );

    await expect(
      new GitLabClient({ fetchImpl: fetchMock }).getRawFile("missing.md"),
    ).rejects.toEqual(
      expect.objectContaining<Partial<GitLabApiError>>({ status: 404 }),
    );
  });
});
