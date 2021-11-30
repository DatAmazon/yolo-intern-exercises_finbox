const checker= require('./Test/Test-Function');
function getElementArrayByLocation(arrA, start, end) {
  if (!checker.isNumber(arrA)) {
    return 'Parameter passed in must be a decimals';
  }
  if (start < arrA.length && end < arrA.length && start <= end)
  {
    let newArr = [];
    let index = 0;
    for (let i = start; i < end; i++) {
      newArr[index] = arrA[i];//Take the value of a and assign it to b
      index++;//Each time assign array newArr add one element
    }
    return newArr;
  }
  else
  {
    return 'start must be less than end; start and end less than arrA.length';
  }
}
module.exports = getElementArrayByLocation;