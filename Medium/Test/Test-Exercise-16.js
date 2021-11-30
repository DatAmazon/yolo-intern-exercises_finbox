const checker = require('./Test-Function');
const fibonacci = require('../Exercise-16');
function checkExercise() {
  console.assert(checker.checkIfTwoArraysAreEqual(fibonacci(7),[1, 1, 2, 3, 5, 8, 13]),
    'Error when entering negative integer in MediumExercise-16');
  console.assert(checker.checkIfTwoArraysAreEqual(fibonacci(0),[1]), 'Error when entering number 0 in MediumExercise-16');
  console.assert(checker.checkIfTwoArraysAreEqual(fibonacci(1),[1, 1]), 'Error when entering number 0 in MediumExercise-16');
  console.assert(fibonacci(-5) === 'Parameter passed in must be a positive integer',
    'Error when entering negative integer in MediumExercise-16');
  console.assert(fibonacci('ds') === 'Parameter passed in must be a positive integer',
    'Error when entering string in MediumExercise-16');
}
module.exports = checkExercise;