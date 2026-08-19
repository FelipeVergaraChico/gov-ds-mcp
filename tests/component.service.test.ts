import { describe, expect, it } from "vitest";
import { ComponentService } from "../src/services/component.service.js";
import type { GovBrComponent } from "../src/types/component.js";

const button: GovBrComponent = {
  name: "Button",
  slug: "button",
  description: "Button description",
  documentationUrl: "https://www.gov.br/ds/components/button",
  sections: [],
  accessibility: [],
  source: { repository: "govbr-ds/govbr-ds", ref: "main" },
};

describe("ComponentService", () => {
  const service = new ComponentService([button]);

  it("lists available components", () => {
    expect(service.listComponents()).toEqual([button]);
  });

  it.each(["button", "Button", "BUTTON"])(
    "finds a component case-insensitively for %s",
    (slug) => {
      expect(service.getComponent(slug)).toEqual(button);
    },
  );

  it("returns undefined for a missing component", () => {
    expect(service.getComponent("missing")).toBeUndefined();
  });
});
