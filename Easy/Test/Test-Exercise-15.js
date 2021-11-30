const  factorial = require('../Exercise-15');

function checkExercise() {
  console.assert(factorial(5) === 120, 'Error when entering positive integer in EasyExercise-15');
  console.assert(factorial(-4) === 'Parameter passed in must be a positive integer',
    'Error when entering negative integer in EasyExercise-15');
  console.assert(factorial('ds') === 'Parameter passed in must be a positive integer',
    'Error when entering character in EasyExercise-15');
  console.assert(factorial(5.532) === 'Parameter passed in must be a positive integer',
    'Error when entering decimals in EasyExercise-15');
  console.assert(factorial(0) === 1,
    'Error when entering number 0 in EasyExercise-15');
}
module.exports = checkExercise;