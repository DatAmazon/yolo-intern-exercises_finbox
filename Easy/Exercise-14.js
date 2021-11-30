const checker = require('./Test/Test-Function');

function findLocationNumberAInArrB(a) {
  if (!checker.checkDecimal(a))//If variable a is an integer or decimal
  {
    return 'Parameter passed in must be a decimals';
  }
  let arr = [1, 2, 3, 4, 5, 3, 5.343, 9, -7, -7, -7];
  let result = 0;
  for (let i = 0; i < arr.length; i++) //check from the beginning to the end of the array
  {
    if (arr[i] === a) {
      result = i;
      break;
    } else {
      result = -1;
    }
  }
  return result;
}
module.exports = findLocationNumberAInArrB;

