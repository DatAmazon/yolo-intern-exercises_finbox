const checker = require('./Test/Test-Function')

function countElementsInArr1AndInArr2(arr1, arr2) { //Quest10
  if (!checker.isNumber(arr1) || !checker.isNumber(arr2)) {
    return 'Parameter passed in must be a decimals';
  }
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j])// if element in array arr1 = element in array arr2 then count
      {
        count++;
        break;
      }
    }
  }
  return count;
}

module.exports = countElementsInArr1AndInArr2;
