function capitalize(string) {
  let s = string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
  return s;
}
module.exports = capitalize;
