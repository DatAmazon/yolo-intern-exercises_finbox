const checker = require('./Test-Function');
const sumDigits = require('../Exercise-15');
function checkExercise() {
  console.assert(sumDigits(-555556) === 31, 'Error when entering negative integer in MediumExercise-15');
  console.assert(sumDigits(555556) === 31, 'Error when entering positive integer in MediumExercise-15');
  console.assert(sumDigits(0) === 0, 'Error when entering number 0 in MediumExercise-15');
  console.assert(sumDigits(32432.23423) === 'Parameter passed in must be an integer', 'Error when entering decimals in MediumExercise-15');
  console.assert(sumDigits('ds') === 'Parameter passed in must be an integer', 'Error when entering character in MediumExercise-15');
}
module.exports = checkExercise;