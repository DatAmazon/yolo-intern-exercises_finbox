const checker = require('./Test-Function');
const getRandomnNegativeAToPositiveA = require('../Exercise-12');
function checkExercise() {
  console.assert(getRandomnNegativeAToPositiveA(3) >= -3 && getRandomnNegativeAToPositiveA(3) <= 3,
    'Error random out from -a to a, in MediumExercise-12');
  console.assert(getRandomnNegativeAToPositiveA('ds') === 'Parameter passed in must be a decimals',
    'Error when entering character in MediumExercise-12');
}
module.exports = checkExercise;