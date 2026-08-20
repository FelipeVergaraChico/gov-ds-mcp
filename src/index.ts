#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/server";
import { serveStdio } from "@modelcontextprotocol/server/stdio";
import { ComponentService } from "./services/component.service.js";
import { SearchService } from "./services/search.service.js";
import { registerResources } from "./resources/register-resources.js";
import { registerPrompts } from "./prompts/register-prompts.js";
import { registerGetComponentTool } from "./tools/get-component.js";
import { registerListComponentsTool } from "./tools/list-components.js";
import { registerSearchDocsTool } from "./tools/search-docs.js";

export function createServer(): McpServer {
  const server = new McpServer({
    name: "govbr-ds-mcp",
    version: "0.1.0",
  });
  const componentService = new ComponentService();
  const searchService = new SearchService(componentService.listComponents());

  registerListComponentsTool(server, componentService);
  registerGetComponentTool(server, componentService);
  registerSearchDocsTool(server, searchService);
  registerResources(server, componentService);
  registerPrompts(server, componentService);

  return server;
}

void serveStdio(createServer);

console.error("govbr-ds-mcp running on stdio");
