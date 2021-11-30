const checker = require('./Test/Test-Function');

function sumDigits(n) {
  if(!checker.checkInteger(n))//If variable n is not an integer
  {
    return 'Parameter passed in must be an integer';
  }
  let sum = 0;
  while (n) {
    let digit = n % 10;//Take last number of number n
    sum += digit; //Add with sum
    n = (n - digit) / 10;//remove the number of just get
  }
  if (sum < 0)
  {
    sum = sum * -1
  }
  return sum;
}
module.exports = sumDigits;