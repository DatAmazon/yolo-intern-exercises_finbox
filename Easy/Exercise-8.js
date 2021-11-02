  function checkPrimest(a) {
    let flat = true
    if (a <= 1)
    {
        flat = false
    }
    else if(a <= 3)
    {
        flat = true
    }
    else
    {
        for(let i = 1; i <= Math.sqrt(a); i++)
        {
            if(a % i == 0)
            {
                flat = false
            }
            else
            {
                flat = true
            }
        }
    }
    console.log(a + ' is a prime number is:', flat)
  }
  checkPrimest(7)