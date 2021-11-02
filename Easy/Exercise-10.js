  function findBigest() {
    let a=[2, 5, 6, 79 , 34, 32, 76]
    let max = a[0]
    for(let i = 0; i < a.length; i++)
    {
      if(a[i] > max)
      {
        max = a[i]
      }
    }
    console.log('Number biggest in array is:',max)
  }
  findBigest()
