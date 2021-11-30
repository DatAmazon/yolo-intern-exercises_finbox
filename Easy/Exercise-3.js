const checker = require('./Test/Test-Function.js')
function checkParity(a, b) {
  if( !checker.checkInteger(a) || !checker.checkInteger(b))
  {
    return 'Parameter passed in must be an integer';
  }
  let c = a + b;
  if( c % 2 === 0)// The sum of two numbers that are both even or odd is always an even number
  {
    if(a % 2 === 0)// If a number is divided by 2 the remainder 0, then both number is an even integer
      {
        return (a + ' and '+ b +' both even');
      }
      else// Else, if a number is divided by 2 the remainder 1, then both number is an odd integer
      {
        return (a + ' and '+ b +' both odd');
      }
  }
  else
  {
    return ('One even, One odd');// The sum of two numbers, one even and one odd, is always an odd number
  }
}
module.exports =  checkParity;
