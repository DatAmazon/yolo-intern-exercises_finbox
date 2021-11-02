  function Fibonacci(n) {//Quest17
    let fib = [];
    // fib[0] = 0;
    fib[1] = 1;
    fib[2] = 1;
    for (let i = 3; i <=n; i++)
    {
        fib[i] = fib[i - 2] + fib[i - 1];

    }
      console.log('the first' + n + 'numbers in the fibonacci sequence is: ', fib);
  }
  Fibonacci(7)