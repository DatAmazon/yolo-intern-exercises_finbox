const checkerTestFunction = require('./Test-Function');
const changeLocation3Nums = require('../Exercise-1');

function checkExercise() {
  console.assert(checkerTestFunction.checkIfTwoArraysAreEqual(changeLocation3Nums(5, 6, 7), ([7, 5, 6])) === true,
    'Error when entering integer in EasyExercise-1');
  console.assert(checkerTestFunction.checkIfTwoArraysAreEqual(changeLocation3Nums(4000, 's'), [43, 43, 67]) === false,
    'Error when entering string in EasyExercise-1');
  console.assert(checkerTestFunction.checkIfTwoArraysAreEqual(changeLocation3Nums(4.3, 4.34, 4.4), [4.4, 4.3, 4.34]) === true,
    'Error when entering decimal in EasyExercise-1');
}
 module.exports = checkExercise;
