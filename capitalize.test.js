const capitalize = require("./capitalize");

describe("Make first letter capital", () => {
  test("all lower", () => {
    expect(capitalize("bora")).toBe("Bora");
  });
  test("first lower rest capital", () => {
    expect(capitalize("bORA")).toBe("Bora");
  });
  test("All capital", () => {
    expect(capitalize("BORA")).toBe("Bora");
  });
});
