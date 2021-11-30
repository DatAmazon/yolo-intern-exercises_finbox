const checker = require('./Test/Test-Function.js');

function countOddNumbers(a) {
  let counts = 0;
  for (let i = 0; i < a.length; i++) {
    if (!checker.checkInteger(a[i])) {
      return 'Parameter passed in must be an integer'
    }
    if (checker.checkOdd(a[i])) {
      counts++;
    }
  }
  return counts;
}
module.exports = countOddNumbers;