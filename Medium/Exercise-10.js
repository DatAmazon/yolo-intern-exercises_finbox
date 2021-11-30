const checker = require('./Test/Test-Function')
function countElementsANotInB(arr1, arr2) {
  if (!checker.isNumber(arr1) || !checker.isNumber(arr2)) {
    return 'Parameter passed in must be a decimals';
  }
  let count = 0;
  for (let i = 0; i < arr1.length ; i++)
  {
    let isExist = false;
    for(let j =0 ; j < arr2.length ; j++)
    {
      if(arr1[i] === arr2[j])
      {
        isExist = true;// If exists an element in array arr1  equal to an element in array arr2 b, then break
        break;
      }
    }
    if (isExist === false)
    {
      count ++;// If not exists an element in array arr1  equal to an element in array arr2 b, then count
    }
  }
  return count;
}
module.exports = countElementsANotInB;

