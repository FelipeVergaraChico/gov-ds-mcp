import { components as localComponents } from "../data/components.js";
import type { GovBrComponent } from "../types/component.js";

export class ComponentService {
  constructor(
    private readonly components: readonly GovBrComponent[] = localComponents,
  ) {}

  listComponents(): GovBrComponent[] {
    return [...this.components];
  }

  getComponent(slug: string): GovBrComponent | undefined {
    const normalizedSlug = slug.trim().toLowerCase();

    return this.components.find(
      (component) => component.slug.toLowerCase() === normalizedSlug,
    );
  }
}
