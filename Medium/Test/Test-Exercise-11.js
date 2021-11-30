const checker = require('./Test-Function');
const getRandom0ToA = require('../Exercise-11');
function checkExercise() {
  console.assert(getRandom0ToA(6) <= 6 && getRandom0ToA(6) >= 0, 'Error random out from 0 to a, in MediumExercise-11');
  console.assert(getRandom0ToA('ds') === 'Parameter passed in must be a decimals',
    'Error when entering character in MediumExercise-11');
}
module.exports = checkExercise;
