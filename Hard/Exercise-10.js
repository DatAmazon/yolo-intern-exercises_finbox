const checker = require('./Test/Test-Function');
function shuffleOrderElementNumInArray(arrA) {
  if (!checker.isNumber(arrA))//The input value must be a string
  {
    return 'Parameter passed in must be a decimals';
  }
  let newArr = []
  for(let i = 0; i < arrA.length; i++)
  {
    if(i < arrA.length - 1)
    {
      newArr[i +1] = arrA[i]
    }
    else if(i === arrA.length-1)
    {
      newArr[0] = arrA[arrA.length-1]
    }
  }
  return newArr;
}
module.exports = shuffleOrderElementNumInArray;