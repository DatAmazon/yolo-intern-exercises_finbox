const checker = require('./Test-Function');
const concatArr = require('../Exercise-2')

function checkExercise() {
  console.assert(checker.checkIfTwoArraysAreEqual(concatArr([2, 5, 9], [89, 35, 88]), [2, 5, 9, 89, 35, 88]),
    'Error when entering positive integer in MediumExercise-2');
  console.assert(checker.checkIfTwoArraysAreEqual(concatArr([-2, 5, -9, -56, 0, -87], [35, 37]), [-2, 5, -9, -56, 0, -87, 35, 37]),
    'Error when entering negative integer and positive integer and number 0 in MediumExercise-2');
  console.assert(checker.checkIfTwoArraysAreEqual(concatArr([2.434, 5.652], [0, 0, 3.432, 56, 23.453, 87.765]),
    [2.434, 5.652, 0, 0, 3.432, 56, 23.453, 87.765]), 'Error when entering decimals in MediumExercise-2');
}

module.exports = checkExercise;