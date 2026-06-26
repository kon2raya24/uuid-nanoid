import { describe, it, expect } from "vitest";
import { cuid } from "../cuid";

describe("cuid", () => {
  it("should be a function", () => {
    expect(typeof cuid).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => cuid(null as any)).toThrow();
  });
});
