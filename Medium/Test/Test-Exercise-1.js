const checker = require('./Test-Function');
const sortArrayAscending = require('../Exercise-1')
function checkExercise() {
  console.assert(checker.checkIfTwoArraysAreEqual(sortArrayAscending([3, 1, 2, 8, 7, 12, 6]),([1, 2, 3, 6, 7, 8, 12])),
    'Error when entering positive integer in MediumExercise-1');
  console.assert(checker.checkIfTwoArraysAreEqual(sortArrayAscending([-3, -1, -2, 0, -7, -12, -69876]),([-69876, -12, -7, -3, -2, -1, 0])),
    'Error when entering negative integer and positive integer and number 0 in MediumExercise-1');
  console.assert((sortArrayAscending([7, 'ds', 12, 6])) === 'Parameter passed in must be a decimals',
    'Error when entering character in MediumExercise-1');
  console.assert(checker.checkIfTwoArraysAreEqual(sortArrayAscending([67, 0, -34, 12, 64, 4.432, 6.43, 100])
    ,([-34, 0, 4.432, 6.43, 12, 64, 67, 100]), 'Error when entering decimals in MediumExercise-1'));
}
module.exports = checkExercise;