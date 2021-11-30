const checker = require('./Test-Function');
const concatTwoArrAndSortAscending = require('../Exercise-3')
function checkExercise() {
  console.assert(checker.checkIfTwoArraysAreEqual(concatTwoArrAndSortAscending([0, 1.342, 2, 5, 7], [-3, -1, 2, 9.23, 34]),
    [-3, -1, 0, 1.342, 2, 2, 5, 7, 9.23, 34]), 'Error when entering positive integer and decimals in HardExercise-3')
  console.assert(concatTwoArrAndSortAscending([0, 4, 0, 0], [1, 1, 1]) ===
    'Array must be sorted ascending', 'Error when entering array1 or array2 is not ascending order in HardExercise-3')
  console.assert(concatTwoArrAndSortAscending([0, 'sd', 0, 0], [1, 1, 1]) ===
    'Parameter passed in must be a decimals', 'Error when entering character in HardExercise-3')
}
module.exports = checkExercise;