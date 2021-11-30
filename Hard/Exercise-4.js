const checker = require('./Test/Test-Function');
function concatArrSortDescending (arr1, arr2) {
  for(let i = 0; i <= arr1.length; i++)// sort array arr1 descending
  {
    if( arr1[i] < arr1[i +1])
    {
      return 'Array must be sorted descending';
    }
  }
  for(let i = 0; i <= arr2.length; i++)// sort array arr1 descending
  {
    if( arr2[i] < arr2[i +1])
    {
      return 'Array must be sorted descending';
    }
  }
  if(!checker.isNumber(arr1) || !checker.isNumber(arr2))
  {
    return 'Parameter passed in must be a decimals';
  }
  let newArr = [];
  for( let i = 0; i <= (arr1.length + arr2.length - 1 ); i++ )// concat two array
  {
    if(i<arr1.length)
    {
      newArr[i] = arr1[i];
    }
    else
    {
      newArr[i] = arr2[i-arr1.length];
    }
  }
  let temp = 0;
  for (let i = 0; i < newArr.length; i++)// concat two array
  {
    for (let j = i; j < newArr.length; j++)
    {
      if (newArr[j] > newArr[i])
      {
        temp = newArr[j];
        newArr[j] = newArr[i];
        newArr[i] = temp;
      }
    }
  }
  return newArr;
}

module.exports = concatArrSortDescending;