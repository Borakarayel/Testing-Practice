function analyzeArray(arr) {
  let obj = {
    min: Math.min(...arr),
    max: Math.max(...arr),
    avg: arr.reduce((a, b) => a + b, 0) / arr.length,
    length: arr.length,
  };
  return obj;
}

console.log(analyzeArray([1, 2, 3, 4, 5]));

module.exports = analyzeArray;
