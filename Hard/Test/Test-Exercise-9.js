const checker = require('./Test-Function');
const sumStringAInStringB = require('../Exercise-9')
function checkExercise() {
  console.assert(sumStringAInStringB('la la ka la la ka la', 'la') === 5,
    'Error when entering strB exists in strA in HardExercise-9');
  console.assert(sumStringAInStringB('la la ka la la ka la', 'na') === 'strB not exists in strA',
    'Error when entering strB not exists in strA in HardExercise-9');
  console.assert(sumStringAInStringB([4, 55, 6], 'na') === 'Parameter passed in must be a string',
    'Error, Not entering array in strB or strA in HardExercise-9');
  console.assert(sumStringAInStringB(89, 'na') === 'Parameter passed in must be a string',
    'Error, Not entering number in strB or strA in HardExercise-9');
}
module.exports = checkExercise;