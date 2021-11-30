const checker = require('./Test/Test-Function')

function findBigest(a) {
  let max = a[0];
  for (let i = 0; i < a.length; i++) {
    if (!checker.checkDecimal(a[i])) {
      return 'Parameter passed in must be an integer or decimal';
    }
    if (a[i] > max) {
      max = a[i];
    }
  }
  return max;
}
module.exports = findBigest;

