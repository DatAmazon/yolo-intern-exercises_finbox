const checker= require('./Test/Test-Function');
function multiplyTwoArr(arr1, arr2) {
  if(!checker.isNumber(arr1) || !checker.isNumber(arr2))
  {
    return 'Parameter passed in must be a decimals';
  }
  let arrNew = []
  for (let i = 0; i < Math.max(arr1.length, arr2.length) ; i++)
  {
    arrNew[i] = (arr1[i] ||0) * (arr2[i] || 0)
    if (arrNew[i] ===  -0)
    {
      arrNew[i] = 0;
    }
  }
  return  arrNew;
}
module.exports = multiplyTwoArr;


