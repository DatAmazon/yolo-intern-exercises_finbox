const checker = require('./Test/Test-Function');
function sumOddNumber(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    if (!checker.checkInteger(a[i])) {
      return 'Parameter passed in must be an integer';
    }
    if (checker.checkOdd(a[i])) {
      sum += a[i];
    }
  }
  return sum;
}
module.exports = sumOddNumber;
