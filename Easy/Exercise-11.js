const checker = require('./Test/Test-Function');

function findSmallest(a) {
  let min = a[0];
  for (let i = 0; i < a.length; i++) {
    if (!checker.checkDecimal(a[i])) {
      return 'Parameter passed in must be an integer or decimal';
    }
    if (a[i] < min) {
      min = a[i];
    }
  }
  return min;
}
module.exports = findSmallest;





