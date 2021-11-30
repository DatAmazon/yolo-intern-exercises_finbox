const checker = require('./Test/Test-Function');

function factorial(a) {
  if (!checker.checkPositiveInteger(a)) {
    return 'Parameter passed in must be a positive integer';
  }
  return checker.caculationFactorial(a);
}
module.exports = factorial;


