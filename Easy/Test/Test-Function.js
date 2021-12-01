//check integer
function checkInteger(number) {
  if (number % 1 === 0) {
    return true;
  } else {
    return false;
  }
}

// module.exports = checkInteger
//check positive integer
function checkPositiveInteger(number) {
  if (number % 1 === 0 && number >= 0) {
    return true;
  } else {
    return false;
  }
}

//check positive decimal
function checkDecimal(a) {
  if (a % 1 > -1 && a % 1 < 1) {
    return true;
  } else {
    return false;
  }
}

// module.exports = checkDecimal;

//check if two arrays are equal
function checkIfTwoArraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// implement in array is NAN
function isNumber(arr) {
  for (let j = 0; j < arr.length; j++) {
    if (isNaN(j)) {
      return false;
    }
  }
  return true;
}

// console.log(isNumber([6, 'fgd', 5.9, -2, 5]))

//check positive string
function isString(a) {//
  if (a === 'string') {
    return true;
  } else {
    return false;
  }
}

//caculation factorial
function caculationFactorial(number) {
  if (number < 0) {
    return -1;
  }
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

//check even number
function checkEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

//check odd number
function checkOdd(number) {
  if (number % 2 === 1 || number % 2 === -1) {
    return true;
  } else {
    return false;
  }
}
//check prime
function checkPrime(number) {
  let flat = 0;
  if (!checkInteger(number) || number <= 0 ) {
    flat = false;
  } else if (number > 1 && number <= 3) {
    flat = true;
  }
  else
  {
    for(let i = 2; i <= Math.sqrt(number); i++)
    {
      if(number % i === 0)
      {
        flat = false;
      }
      else
      {
        flat = true;
      }
    }
  }
  return flat;
}
// caculation Factorial
function caculationFactorial(number) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
module.exports = {
  checkDecimal: checkDecimal,
  checkInteger: checkInteger,
  checkIfTwoArraysAreEqual: checkIfTwoArraysAreEqual,
  checkPositiveInteger: checkPositiveInteger,
  isNumber: isNumber,
  isString: isString,
  caculationFactorial: caculationFactorial,
  checkOdd: checkOdd,
  checkEven: checkEven,
  checkPrime: checkPrime,
  caculationFactorial: caculationFactorial
}






