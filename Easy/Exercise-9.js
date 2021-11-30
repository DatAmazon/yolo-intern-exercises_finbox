const checker = require('./Test/Test-Function')

function getRemainder(a, b) {
  let result = 0;
  if (!checker.checkInteger(a)) {
    return 'Parameter passed in must be an integer';
  }
  if (!checker.checkInteger(b) || b === 0) {
    return 'Parameter passed in must be an integer and non-zero';
  } else if (a >= 0 && b > 0)// If both variable a and variable c are positive
  {
    while (a >= b) {
      a = a - b;
    }
    result = a;
  } else if (a >= 0 && b < 0)// If a is positive and variable b is negative
  {
    b = b * -1;
    while (a >= b) {
      a = a - b;
    }
    result = a;
  } else if (a <= 0 && b > 0)// If a is negative and variable b is positive
  {
    a = a * -1;
    while (a >= b) {
      a = a - b;
    }
    result = a * -1;
  } else if (a <= 0 && b < 0)// If both a and c are negative
  {
    a = a * -1;
    b = b * -1;
    while (a >= b) {
      a = a - b;
    }
    result = a * -1;
  }

  return result;
}
module.exports = getRemainder;
