const checker = require('./Test/Test-Function');

function getRandom0ToA(a) {
  if (!checker.checkDecimal(a)) {
    return 'Parameter passed in must be a decimals';
  } else {
    return ((Math.random() * a));//from 0 to 1 multiple with parameter (a) result is from 0 to (a)
  }
}

module.exports = getRandom0ToA;