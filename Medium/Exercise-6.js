const checker = require('./Test/Test-Function');

function divideTwoArr(arr1, arr2) {
  for (let j of arr2) {
    if (j === 0) {
      return 'Implement in arr2 must be different 0'
    }
  }
  if (!checker.isNumber(arr1) || !checker.isNumber(arr2)) {
    return 'Parameter passed in must be a decimals';
  }

  let arrNew = []
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    arrNew[i] = (arr1[i] || 0) / (arr2[i] || 0)
  }
  return arrNew;
}

module.exports = divideTwoArr;

