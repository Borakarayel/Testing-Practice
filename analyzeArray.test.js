const analyzeArray = require("./analyzeArray");

test("number array", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    avg: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
