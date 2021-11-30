const checkerTestFunction = require('./Test-Function');
const  averageArr = require('../Exercise-12');

function checkExercise() {
  console.assert(averageArr([-9, 6, 0, -11, 34, 32, 76.56, 600]) === 91.07,
    'Error when entering integer, decimals and 0 in EasyExercise-12');
  console.assert(averageArr(['sd', 32, 76, [4, 45]]) === 'Parameter passed in must be an integer or decimal',
    'Error when entering not number in EasyExercise-12');
}
module.exports = checkExercise;