function countAppear0InFactorial(n) {
  //factorial calculation
  if ( n % 1 == 0 && n >= 0) {
    let result = 1;
    let count = 0;
    for (let i = 1; i <= n; i++) {
      result *= i
    }
    //count times appear number 0
    result = result.toString()
    for (let i = result.length - 1; i >= 0; i--) {
      if (result[i] === '0') {
        count++
      }
    }
    return count;
  }
  else
  {
    return 'Parameter passed in must be an positive integer';
  }
}
module.exports = countAppear0InFactorial;
