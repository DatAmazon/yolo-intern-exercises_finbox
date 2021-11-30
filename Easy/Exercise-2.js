const checker = require('./Test/Test-Function.js')

function powAB(a, b) {
  if (!checker.checkInteger(a) || !checker.checkInteger(b)) {
    return 'Parameter passed in must be an integer';
  }
  let c = 1;
  for (let i = 1; i <= b; i++) {
    c *= a;// b time a * a
  }
  return c;
}
module.exports = powAB;

