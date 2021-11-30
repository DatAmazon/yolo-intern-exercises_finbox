const checker = require('./Test-Function');
const LocationFirstStringAInStringB = require('../Exercise-8');
function checkExercise() {
  console.assert(LocationFirstStringAInStringB('I go work today today I  work today', 'today') === 10,
    'Error when entering character in MediumExercise-8');
  console.assert(LocationFirstStringAInStringB('vodka--- a 453  l?!a  la', 'l?') === 16,
    'Error when entering string, number and special character in MediumExercise-8');
}
module.exports = checkExercise;