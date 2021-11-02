  function countAppear0InFactorial(n) {
    let result = 1, count =0
    for(i = 1; i <= n; i++)
    {
        result *= i
    }
    result = result.toString()
    console.log('Result factorial is :', result)
    for(let i = result.length - 1; i >= 0  ; i--)
    {
        if(result[i] == '0')
        {
            count++
        }
    }
    console.log('Result factorial is :', count)
}
countAppear0InFactorial(20)