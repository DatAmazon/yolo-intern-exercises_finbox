  function sumDigits() {
    let n= 555556
    let sum = 0;
    while (n) {
      let digit = n % 10;
      sum += digit;
      n = (n - digit) / 10;
    }
    console.log('The sum of the integers in the number is: ', sum)
  }
  sumDigits()