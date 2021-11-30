const checker = require('./Test/Test-Function');

function randomRange(a, b) {
  if (checker.checkDecimal(a) && checker.checkDecimal(b) && a < b) {
    return a + (Math.random() * (b - a));
  } else {
    return 'Parameter passed in must be a decimals and a < b';
  }
}
module.exports = randomRange;