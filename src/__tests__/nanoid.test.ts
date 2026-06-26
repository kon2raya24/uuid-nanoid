import { describe, it, expect } from "vitest";
import { nanoid } from "../nanoid";

describe("nanoid", () => {
  it("should be a function", () => {
    expect(typeof nanoid).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => nanoid(null as any)).toThrow();
  });
});
