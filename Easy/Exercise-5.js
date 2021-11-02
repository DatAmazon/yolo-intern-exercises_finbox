  function countOddNumbers() {
    let a = [8, 98, 10, 21, 34, 53, 71, 61, 67, 45, 04];
    let counts = 0;
    for(let i = 0; i <= a.length; i++)
    {
      if(a[i]%2 == 1)
      {
        counts++;
      }
    }
    console.log('The number of odd numbers is: ', counts)
  }
  countOddNumbers()
