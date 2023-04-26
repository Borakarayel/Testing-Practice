const cipher = require("./caesarCipher");

describe("Cipher the string", () => {
  test("Cip normal chars", () => {
    expect(cipher("Bora1234!,.")).toBe("Erud4567$/1");
  });
  test("Unexpected char", () => {
    expect(cipher("~")).toBe("");
  });
});
