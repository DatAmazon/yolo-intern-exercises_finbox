  function checkParity() {
    let a = 8
    let b = 12
    let c = a + b
    if( c%2 == 0)
    {
      if(a%2 == 0)
      {
        console.log(a + ' and '+ b +' both even ')
      }
      else
      {
        console.log(a + ' and '+ b +' both odd  ')
      }
    }
    else
    {
      console.log('One even, One odd')
    }
  }
  checkParity()