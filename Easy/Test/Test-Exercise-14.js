const  findLocationNumberAInArrB = require('../Exercise-14');

function checkExercise() {
  console.assert(findLocationNumberAInArrB(3) === 2, 'Error when entering positive integer in EasyExercise-14');
  console.assert(findLocationNumberAInArrB(-7) === 8, 'Error when entering negative integer in EasyExercise-14');
  console.assert(findLocationNumberAInArrB('aaa') === 'Parameter passed in must be a decimals',
    'Error when entering character in EasyExercise-14');
  console.assert(findLocationNumberAInArrB(43) === -1, 'Error when entering number not in array in EasyExercise-14');
  console.assert(findLocationNumberAInArrB(5.343) === 6, 'Error when entering decimals in EasyExercise-14');
}
module.exports = checkExercise;