const checker = require('./Test/Test-Function');

function reverseArr(arr) {
  if (!checker.isNumber(arr)) {
    return 'Parameter passed in must be a decimals';
  }
  for (let i = 0; i < arr.length / 2; i++)//Group 2 implements into 1 so i < arr.length / 2
  {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    //Group implement first and last, continue group implement first +1 and last -1, continues until i < arr.length / 2
  }
  return arr;
}

module.exports = reverseArr;

