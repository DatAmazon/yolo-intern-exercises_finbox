  function countElementsANotInB() {//Count elements exists in array arr1 but not in arr2
    let arr1 = [54, 2, 45, 17, 4, 5]
    let arr2 = [5, 13, 8, 9, 78, 34, 7]
    let count = 0
    for (let i = 0; i < arr1.length ; i++)
    {
      for (let j =0 ; j < arr2.length ; j++)
      {
        if(arr1[i] === arr2[j])
        {
          break;
        }
          if (j === arr2.length - 1)
          {
            if(arr1[i] !== arr2[j])
            {
              count++
            }
          }
      }
    }
    console.log('Count elements in arr2 not exist in arr1 is : ', count)
  }
  countElementsANotInB()