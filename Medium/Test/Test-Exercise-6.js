const checker = require('./Test-Function');
const divideTwoArr = require('../Exercise-6');

function checkExercise() {
  console.assert(checker.checkIfTwoArraysAreEqual(divideTwoArr([-10, '-15', 20, 0, 8], [2, 3, -2, 5, 4]),
    [-5, -5, -10, 0, 2]), 'Error when entering integer in MediumExercise-6');
  console.assert(checker.checkIfTwoArraysAreEqual(divideTwoArr([5, -15.5, 20, 30, 5], [2.5, 10, -2.5, 1.5, 0.4]),
    [2, -1.55, -8, 20, 12.5]), 'Error when entering decimals in MediumExercise-6');
  console.assert((divideTwoArr([5, -15], [2, 'sd', 16])) === 'Parameter passed in must be a decimals'
    , 'Error when entering character in MediumExercise-6');
  console.assert((divideTwoArr([5, -15], [2, 0, 16])) === 'Implement in arr2 must be different 0'
    , 'Error when entering 0 in arr2 in MediumExercise-6');
}
module.exports = checkExercise;
