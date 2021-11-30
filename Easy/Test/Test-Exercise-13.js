const checkIfTwoArraysAreEqual = require('./Test-Function');
const reverseArr = require('../Exercise-13');

function checkExercise() {
  console.assert(checkIfTwoArraysAreEqual.checkIfTwoArraysAreEqual(reverseArr([2, 4, 5, 6]), ([6, 5, 4, 2])),
    'Error when entering integer in EasyExercise-13');
  console.assert(checkIfTwoArraysAreEqual.checkIfTwoArraysAreEqual(reverseArr([4, 5.4, 0, 34.233]), ([34.233, 0, 5.4, 2])) === !true,
    'Error when entering decimals in EasyExercise-13');
  console.assert(checkIfTwoArraysAreEqual.checkIfTwoArraysAreEqual(reverseArr([4, 5.4, 0, 34.233]), ([34.233, 0, 5.4, 4])),
    'Error when entering decimals in EasyExercise-13');
}

module.exports = checkExercise;