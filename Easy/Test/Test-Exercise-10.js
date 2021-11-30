const  findBigest = require('../Exercise-10');

function checkExercise() {
  console.assert(findBigest([2, 5, 6, 79, 34, 32, 76]) === 79, 'Error when entering positive integer in EasyExercise-10');
  console.assert(findBigest([-2, -5, -6, -79, -288, -32, -76]) === -2,
    'Error when entering negative integer in EasyExercise-10');
  console.assert(findBigest([-2, -5, 0, -99, 34, 32, 76]) === 76,
    'Error when entering positive integer and  negative integer and number 0 in EasyExercise-10');
  console.assert(findBigest([-2.43, 5, 76.6]) === 76.6,
    'Error when entering decimals in EasyExercise-10');
  console.assert(findBigest([-2, 'sd', 32, 76]) === 'Parameter passed in must be an integer or decimal',
    'Error when entering character in EasyExercise-10');
}
module.exports = checkExercise;