const minusTwoArr = require('../Exercise-4');
const checker = require('./Test-Function');
function checkExercise() {
  console.assert(checker.checkIfTwoArraysAreEqual(minusTwoArr([5.5, -30.5, 0, -1, 8.5], [8.5, 16.5, -5, -13.5, 80.5, 60.5]),
    [-3, -47, 5, 12.5, -72, -60.5]),'Error when entering negative integer and positive integer and number 0 in MediumExercise-4');
  console.assert(minusTwoArr([0, 0, 'sd', 10, 30], [5, 10, 15]) === 'Parameter passed in must be a decimals',
    'Error when entering character in MediumExercise-4');
}
module.exports = checkExercise;