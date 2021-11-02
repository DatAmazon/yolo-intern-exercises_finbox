  function sumOddNumber() {
    let a = [8, 2, 10, 4, 16, 3, 7, 1, 9, 5, 15]
    let count=0
    for(let i=0; i<=a.length; i++)
    {
      if(a[i]%2 == 1)
      {
        count+=a[i]
      }
    }
    console.log('Sum of odd numbers is: ', count)
  }
  sumOddNumber()