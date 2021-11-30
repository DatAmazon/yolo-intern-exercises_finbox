const check = require('./Test/Test-Function.js')

function countEvenNumber(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (!check.checkInteger(a[i])) {
      return 'Parameter passed in must be an integer';
    }
    if (check.checkEven(a[i])) {
      count = count + 1;
    }
  }
  return count;
}
  module.exports = countEvenNumber;
