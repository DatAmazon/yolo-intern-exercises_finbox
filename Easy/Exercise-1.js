const checker = require('./Test/Test-Function.js')

function changeLocation3Nums(a, b, c) {
  if (!checker.checkDecimal(a) || !checker.checkDecimal(b) || !checker.checkDecimal(c)) {
    return ('Parameters passed in must be an integer or decimal');
  }
  let arr = [a, b, c];
  let d = c;// Create a intermediate variable d
  c = b;
  b = a;
  a = d;
  arr = [a, b, c];
  return arr;
}
module.exports = changeLocation3Nums;

