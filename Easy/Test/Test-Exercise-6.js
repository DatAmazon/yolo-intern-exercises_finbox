const checkerTestFunction = require('./Test-Function');
const  addEvenNumber = require('../Exercise-6');

function checkExercise() {
  console.assert(addEvenNumber([8, 2, 10, 4, 16, 67, 67, 45]) === 40, 'Error when entering integer positive in EasyExercise-6');
  console.assert(addEvenNumber([-8, -2, 67, 45]) === -10, 'Error when entering integer negative in EasyExercise-6');
  console.assert(addEvenNumber([4, 16, -6, -2, 5, 0]) === 12,
    'Error when entering integer negative and integer positive and number 0 in EasyExercise-6');
  console.assert(addEvenNumber([-8, -2, 67.43, 45]) === 'Parameter passed in must be an integer',
    'Error when entering decimals in EasyExercise-6');
  console.assert(addEvenNumber([-8, -2.54, 'd', 45]) === 'Parameter passed in must be an integer',
    'Error when entering character in EasyExercise-6');

}
module.exports = checkExercise;
