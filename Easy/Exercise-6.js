  function addEvenNumber() {
    let a = [8, 2, 10, 4, 16, 53, 71, 67, 67, 45, 4]
    let count = 0
    for(let i = 0; i <= a.length; i++)
    {
      if(a[i]%2 == 0)
      {
        count += a[i]
      }
    }
    console.log('Sum of even numbers is: ', count)
  }
  addEvenNumber()