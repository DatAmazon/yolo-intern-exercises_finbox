const checker = require('./Test-Function');
const countElementsInArr1AndInArr2 = require('../Exercise-9');
function checkExercise() {
  console.assert((countElementsInArr1AndInArr2([5, 0, -3, 45], [5, 0, -3, 80, 90, 30, 8])) === 3,
    'Error when entering positive integer in MediumExercise-9');
  console.assert((countElementsInArr1AndInArr2([5, 'sd', 8], [5, 5, 80, 80])) === 'Parameter passed in must be a decimals',
    'Error when entering character in MediumExercise-9');
  console.assert((countElementsInArr1AndInArr2([5, 8.54, 90, 8.78], [7, 8.54, 10, 8.78])) === 2,
    'Error when entering decimals in MediumExercise-9');
}
module.exports = checkExercise;