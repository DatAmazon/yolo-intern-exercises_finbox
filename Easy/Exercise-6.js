const checker = require('./Test/Test-Function');

function addEvenNumber(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    if (!checker.checkInteger(a[i])) {
      return 'Parameter passed in must be an integer';
    }
    if (checker.checkEven(a[i])) {
      sum += a[i];
    }
  }
  return sum;
}
module.exports = addEvenNumber;
