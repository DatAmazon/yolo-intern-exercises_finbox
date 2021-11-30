const checker = require('./Test-Function');
const multiplyTwoArr = require('../Exercise-5');
function checkExercise() {
  console.assert(checker.checkIfTwoArraysAreEqual(multiplyTwoArr([-5, 10, 4, 3, 0, 1], [5, -10, 15, 2, 30, -7]),[-25, -100, 60, 6, 0, -7]),
    'Error when entering integer in MediumExercise-5');
  console.assert(checker.checkIfTwoArraysAreEqual(multiplyTwoArr([2.5, 3.7, 4.2, 6], [2.5, 10, 5]),[6.25, 37, 21, 0])
    , 'Error when entering decimals and difference lengths in MediumExercise-5');
  console.assert(multiplyTwoArr([3, 'ds', 5], [5, 10, -5, 4, 1]) === 'Parameter passed in must be a decimals',
    'Error when entering character in MediumExercise-5');
}
module.exports = checkExercise;