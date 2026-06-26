import { describe, it, expect } from "vitest";
import { uuid } from "../uuid";

describe("uuid", () => {
  it("should be a function", () => {
    expect(typeof uuid).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => uuid(null as any)).toThrow();
  });
});
