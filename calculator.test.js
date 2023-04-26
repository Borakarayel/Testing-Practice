const calculator = require("./calculator");

describe("Calculate all", () => {
  test("Add", () => {
    expect(calculator.add(3, 3)).toBe(6);
  });
  test("Sub", () => {
    expect(calculator.sub(3, 3)).toBe(0);
  });
  test("Multiply", () => {
    expect(calculator.mult(3, 3)).toBe(9);
  });
  test("Divide", () => {
    expect(calculator.div(10, 5)).toBe(2);
  });
});
