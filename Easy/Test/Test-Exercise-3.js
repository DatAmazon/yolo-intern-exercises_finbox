// const checkerTestFunction = require('./Test/test-Function');
const checkParity = require('../Exercise-3');

function checkExercise() {
  console.assert(checkParity(6, 8) === '6 and 8 both even', 'Error when entering both a and b even numbers in EasyExercise-3');
  console.assert(checkParity(9, 7) === '9 and 7 both odd', 'Error when entering both a and b odd numbers in EasyExercise-3');
  console.assert(checkParity(6, 7) === 'One even, One odd', 'Error when entering one even, one odd in EasyExercise-3');
  console.assert(checkParity(0, 0) === '0 and 0 both even', 'Error when entering both a and b equals = 0 in EasyExercise-3');
  console.assert(checkParity(34.3423, 0) === 'Parameter passed in must be an integer',
    'Error when entering decimal in EasyExercise-3');
  console.assert(checkParity('sd', 8) === 'Parameter passed in must be an integer',
    'Error when entering character in EasyExercise-3');
}
module.exports = checkExercise;
