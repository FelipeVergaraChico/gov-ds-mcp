import type { McpServer } from "@modelcontextprotocol/server";
import type { ComponentService } from "../services/component.service.js";
import { registerAccessibilityReviewPrompt } from "./accessibility-review.prompt.js";
import { registerImplementComponentPrompt } from "./implement-component.prompt.js";
import { registerReviewComponentPrompt } from "./review-component.prompt.js";

export function registerPrompts(
  server: McpServer,
  componentService: ComponentService,
): void {
  registerImplementComponentPrompt(server, componentService);
  registerReviewComponentPrompt(server, componentService);
  registerAccessibilityReviewPrompt(server, componentService);
}
