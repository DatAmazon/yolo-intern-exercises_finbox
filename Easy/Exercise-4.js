  function countEvenNumber() {
    let a = [8, 98, 10, 8, 12, 34, 53, 71, 63, 67, 45, 4];
    let count = 0;
    for(let i = 0; i <= a.length; i++)
    {
      if(a[i]%2 == 0)
      {
        count++;
      }
    }
    console.log('The number of even numbers is: ', count)
  }
  countEvenNumber()