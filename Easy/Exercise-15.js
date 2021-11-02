function factorial(a) {
    let factorial = 1
    for(let i = 1; i <= a; i++)
    {
      factorial = factorial*i
    }
    console.log(a + ' factorial is ', factorial)
}
factorial(6)