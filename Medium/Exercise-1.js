  function sortIncreanArray(array) {//sort an array of numbers in ascending
    let select = 0;
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
         if (array[j] < array[i])
         {
            select = array[j];
            array[j] = array[i];
            array[i] = select;
         }
      }
    }
    return array;
  }
  console.log(sortIncreanArray([3, 1, 2, 8, 7, 12, 6]));

  function sortReduceArray(array) {//sort an array of numbers in decresing
    let temp = 0;
    for (let i = 0; i < array.length; i++)
    {
      for (let j = i; j < array.length; j++)
      {
        if (array[j] > array[i])
          {
            temp = array[j];
            array[j] = array[i];
            array[i] = temp;
          }
      }
    }
      return array;
  }
  console.log(sortReduceArray([3, 1, 2, 8, 7, 12, 6]));