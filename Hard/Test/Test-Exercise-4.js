const checker = require('./Test-Function');
const concatArrSortDescending = require('../Exercise-4')
function checkExercise() {
  console.assert(JSON.stringify(concatArrSortDescending([35, 23, 8.34, 7.3, 0, -2.4, -5], [35, 34.5, -2, -5.6])) ===
    JSON.stringify([35, 35, 34.5, 23, 8.34, 7.3, 0, -2, -2.4, -5, -5.6]), 'Error when entering decimals and integer in HardExercise-4');
  console.assert((concatArrSortDescending([34, 'sd', 4.5], [45, 35]) === 'Parameter passed in must be a decimals'),
    'Error when entering character in HardExercise-4');
  console.assert(concatArrSortDescending([88, 99, 23, 0], [88, 34, 32]) === 'Array must be sorted descending',
    'Error when entering array1 or array2 is not descending order in HardExercise-4');
}
module.exports = checkExercise;