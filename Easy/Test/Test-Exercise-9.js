const checkerTestFunction = require('./Test-Function');
const  getRemainder = require('../Exercise-9');

function checkExercise() {
  console.assert(getRemainder(19, 17) === 2, 'Error when entering both a and b positive integer in EasyExercise-9');
  console.assert(getRemainder(-19, 7) === -5, 'Error when entering a as a negative integer and b as a positive integer in EasyExercise-9');
  console.assert(getRemainder(25, -9) === 7, 'Error when entering a as a positive integer and b as a negative integer in EasyExercise-9');
  console.assert(getRemainder(-40, -13) === -1, 'Error when entering both a and b negative integer in EasyExercise-9');
  console.assert(getRemainder('n', -13) === 'Parameter passed in must be an integer', 'Error when entering string in EasyExercise-9');
  console.assert(getRemainder(-40, 0) === 'Parameter passed in must be an integer and non-zero',
    'Error when entering b equals number 0 in EasyExercise-9');
  console.assert(getRemainder(0, -13) === 0, 'Error when entering a equals number 0 in EasyExercise-9');
  console.assert(getRemainder(453.43, -13) === 'Parameter passed in must be an integer',
    'Error when entering decimals in EasyExercise-9');
}
module.exports = checkExercise;