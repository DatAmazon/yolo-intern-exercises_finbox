const checker = require('./Test-Function');
const shuffleOrderElementNumInArray = require('../Exercise-10')
function checkExercise() {
  console.assert(checker.checkIfTwoArraysAreEqual(shuffleOrderElementNumInArray([3, -5.4, 0, 3.4, 77, -29]),[-29, 3, -5.4, 0, 3.4, 77])
    , 'Error when entering decimals and integer in HardExercise-10');
  console.assert(shuffleOrderElementNumInArray([3, 'sd', 3.4, 77, -29]) === 'Parameter passed in must be a decimals',
    'Error when entering implement is character in HardExercise-10');
  console.assert(shuffleOrderElementNumInArray([3, [3, 4], 3.4, 77, -29]) === 'Parameter passed in must be a decimals',
    'Error when entering implement is array in HardExercise-10');
}
module.exports = checkExercise;