// const checkerTestFunction = require('./Test/test-Function');
const sumOddNumber = require('../Exercise-7');

function checkExercise() {
  console.assert(sumOddNumber([8, 2, 10, 4, 16, 3, 7, 1, 9, 5, 15]) === 40, 'Error when entering integer positive in EasyExercise-7');
  console.assert(sumOddNumber([-8, -2, -10, -21, -3, -7]) === -31, 'Error when entering integer negative in EasyExercise-7');
  console.assert(sumOddNumber([8, 2, 13, 3, 0, -21, -3, -7]) === -15,
    'Error when entering integer negative and positive and number 0 in EasyExercise-7');
  console.assert(sumOddNumber([-8, -2, -10, -21, -3, 'ds']) === 'Parameter passed in must be an integer',
    'Error when entering character in EasyExercise-7');
  console.assert(sumOddNumber([-8, -2, -10.632, -21, -3, 4.54]) === 'Parameter passed in must be an integer',
    'Error when entering decimals in EasyExercise-7');
}
module.exports = checkExercise;