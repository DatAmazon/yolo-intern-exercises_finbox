const checker = require('./Test-Function');
const reverseCharactersInStringButKeepPositionWords = require('../Exercise-1')
function checkExercise() {
  console.assert(reverseCharactersInStringButKeepPositionWords('I am Doing JS') === 'I ma gnioD SJ', 'Error when entering string in HardExercise-1');
  console.assert(reverseCharactersInStringButKeepPositionWords('---     abc98    !') === '---     89cba    !',
    'Error when entering string and special character in HardExercise-1');
  console.assert(reverseCharactersInStringButKeepPositionWords('') === '', 'Error when string is null in HardExercise-1');
  console.assert(reverseCharactersInStringButKeepPositionWords('098. 324. -324') === '.890 .423 423-', 'Error when entering number in HardExercise-1');
}
;
module.exports = checkExercise;
