const checker = require('./Test/Test-Function')

function concatArr(arrA, arrB) {
  if (!checker.isNumber(arrA) || !checker.isNumber(arrB)) {
    return 'Parameter passed in must be a decimals';
  }
  let arrC = []
  for (let i = 0; i < (arrA.length + arrB.length); i++) {
    if (i < arrA.length) {
      arrC[i] = arrA[i];
    } else {
      arrC[i] = arrB[i - arrA.length];
    }
  }
  return arrC;
}

module.exports = concatArr;

