function returnsLastNumberFactorial(n) {
  //factorial calculation
  if (n === 0) {
    return 1;
  }
  if (n % 1 == 0 && n >= 0) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    // find last number in factorial
    result = result.toString();
    for (let i = result.length - 1; i >= 0; i--) {
      if (result[i] !== '0') {
        result = result[i];
        break;
      }
    }
    return parseInt(result);
  } else {
    return 'Parameter passed in must be an positive integer';
  }
}

module.exports = returnsLastNumberFactorial;