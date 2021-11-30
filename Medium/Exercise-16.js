const checker = require('./Test/Test-Function');

function fibonacci(n) {
  if(!checker.checkPositiveInteger(n))
  {
    return 'Parameter passed in must be a positive integer';
  }
  let fib = [n];
  fib[0] = 1;
  fib[1] = 1;
  if( n == 0 )
  {
    return [1];
  }
  else if( n == 1 )
  {
    return [1, 1];
  }
  for (let i = 2; i < n; i++)
  {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib;
}
module.exports = fibonacci;