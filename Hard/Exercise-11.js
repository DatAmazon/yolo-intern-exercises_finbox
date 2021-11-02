  function returnsLastNumberFactorial(n) {
    let result = 1
    for(let i = 1; i <= n; i++)
    {
      result *= i
    }
    result = result.toString()
    console.log('Result factorial is :', result)
    for(let i = result.length - 1; i >= 0  ; i--)
    {
      if(result[i] !== '0')
      {
        return result[i]
      }
    }
    console.log('Result factorial is :', result)
  }
  console.log('The number need find is :',returnsLastNumberFactorial(12))