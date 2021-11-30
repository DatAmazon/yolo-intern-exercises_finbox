const checker = require('./Test-Function');
const sumTwoArr = require('../Exercise-3')

function checkExercise() {
  console.assert(checker.checkIfTwoArraysAreEqual(sumTwoArr([-5, 10, 0, -15, 20, -30], [8, 16, 8, 13, 80, 60]),
    [3, 26, 8, -2, 100, 30]), 'Error when entering integer in MediumExercise-3');
  console.assert(checker.checkIfTwoArraysAreEqual(sumTwoArr([-5.5, 30.5, 8.5], [8.5, 16.5, 13.5, 80.6, 60.5]),
    [3, 47, 22, 80.6, 60.5]), 'Error when entering decimals and arrays of different lengths in MediumExercise-3');
  console.assert(sumTwoArr([-7, 'sd', 5, 17], [-4, 16, 23]) === 'Parameter passed in must be a decimals',
    'Error when entering character in MediumExercise-3');
}

module.exports = checkExercise;