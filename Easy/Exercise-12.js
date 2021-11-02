  function averageArr(a) {
    let sum=0
    let count=0
    for(let i = 0; i < a.length; i++)
    {
      sum += a[i];
      count++;
    }
    console.log('The average of the numbers in the array is:', sum/count);
  }
  averageArr(a=[9, 5, 6, 79 , -11, 34, 32, 76, 6])