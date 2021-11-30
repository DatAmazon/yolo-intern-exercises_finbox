const checkerTestFunction = require('./Test-Function');
const  findSmallest = require('../Exercise-11');

function checkExercise() {
  console.assert(findSmallest([2, 5, 6, 79, 34, 32, 76]) === 2, 'Error when entering positive integer in EasyExercise-11');
  console.assert(findSmallest([-2, -5, -6, -79, -288, -32, -76]) === -288,
    'Error when entering negative integer in EasyExercise-11');
  console.assert(findSmallest([-2, -5, 0, -99, 34, 32, 76]) === -99,
    'Error when entering positive integer and  negative integer and number 0 in EasyExercise-11');
  console.assert(findSmallest([-2.43, 5.54, 76]) === -2.43, 'Error when entering decimals in EasyExercise-11');
  console.assert(findSmallest([-2, 'sd', 32, 76]) === 'Parameter passed in must be an integer or decimal',
    'Error when entering character in EasyExercise-11');
}
module.exports = checkExercise;