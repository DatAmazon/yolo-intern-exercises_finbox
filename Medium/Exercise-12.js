const checker = require('./Test/Test-Function');

function getRandomnNegativeAToPositiveA(a) {
  if (checker.checkDecimal(a))//If the elements in the array are not numbers
  {
    return ((Math.random() * a) - (Math.random() * a));
    //from 0 to 1 multiple with parameter (a) result is from 0 to (a)
    //from 0 to (a) minus from 0 to (a), result is from negative a to positive a
  } else {
    return 'Parameter passed in must be a decimals';
  }
}

module.exports = getRandomnNegativeAToPositiveA;