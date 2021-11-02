  function findSmallest() {
    let a=[9, 5, 6, 79 , -9, 34, 32, 6]
    let min = a[0]
    for(i = 0; i < a.length; i++)
    {
      if(a[i] < min)
      {
        min = a[i]
      }
    }
    console.log('Number smallest in array is:',min)
  }
  findSmallest()