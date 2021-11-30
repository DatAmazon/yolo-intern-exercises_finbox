const powAB = require('../Exercise-2');

function checkExercise() {
  console.assert(powAB(4, 6) === 4096, 'Error when entering integer in EasyExercise-2');
  console.assert(powAB('ee', 5) === 'Parameter passed in must be an integer', 'Error when entering character in EasyExercise-2');
  console.assert(powAB(7.54, 5) === 'Parameter passed in must be an integer', 'Error when entering decimals in EasyExercise-2');
  console.assert(powAB(0, 5) === 0, 'Error when entering a = 0 in EasyExercise-2');
  console.assert(powAB(4, 0) === 1, 'Error when entering both b= 0 in EasyExercise-2');
  console.assert(powAB(0, 0) === 1, 'Error when entering both a and b equals 0 in EasyExercise-2');
}
module.exports = checkExercise;
