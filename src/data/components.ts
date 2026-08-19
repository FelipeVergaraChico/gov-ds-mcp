import { generatedComponents } from "./components.generated.js";

// Runtime data is generated ahead of time by `npm run sync:components`.
// Starting the MCP never performs network requests.
export const components = generatedComponents;
