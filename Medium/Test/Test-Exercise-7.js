const checker = require('./Test-Function');
const getElementArrayByLocation = require('../Exercise-7');
function checkExercise() {
  console.assert(checker.checkIfTwoArraysAreEqual(getElementArrayByLocation([3999, 7, 32, 54, 86, 32, 54, 23], 3, 6),
    [54, 86, 32]), 'Error when entering decimal in MediumExercise-7');
  console.assert(getElementArrayByLocation([3, 7, 32, 54, 86, 32, 54, 23], 7, 6) ===
    'start must be less than end; start and end less than arrA.length', 'Error when entering start greater than end in MediumExercise-7');
  console.assert(getElementArrayByLocation([3, 7, 32, 54, 86, 32, 54, 23], 300, 6) ===
    'start must be less than end; start and end less than arrA.length', 'Error entering start or end greater than arrA.length in MediumExercise-7');
}
module.exports = checkExercise;