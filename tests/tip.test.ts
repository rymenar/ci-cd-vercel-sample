import { calcSplit } from "@/lib/tip";
import { describe, it, expect } from "vitest";

describe("calcSplit", () => {
  it("splits correctly", () => {
    const res = calcSplit({ bill: 100, tipPct: 10, people: 2 });
    expect(res.total).toBe(110);
    expect(res.perPerson).toBe(55);
  });
  it("checks bad input", () => {
    expect(() => calcSplit({ bill: -1, tipPct: 10, people: 1 })).toThrow();
    expect(() => calcSplit({ bill: 1, tipPct: -5, people: 1 })).toThrow();
    expect(() => calcSplit({ bill: 1, tipPct: 5, people: 0 })).toThrow();
  });
});
