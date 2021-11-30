const checker = require('./Test-Function');
const countElementsANotInB = require('../Exercise-10');
function checkExercise() {
  console.assert(countElementsANotInB([5, -13, 8, 0, 45.45, 17, 4], [5, -13, 8, 9]) === 4,
    'Error when entering integer and in MediumExercise-10');
  console.assert(countElementsANotInB([5, 'sa', 54, 35], [5, 13, 8]) === 'Parameter passed in must be a decimals',
    'Error when entering character in MediumExercise-10');
}
module.exports = checkExercise;