const returnsLastNumberFactorial = require('../Exercise-11')

function checkExercise() {
  console.assert(returnsLastNumberFactorial(20) === 4, 'Error when entering positive integer in MediumExercise11');
  console.assert(returnsLastNumberFactorial(-6) === 'Parameter passed in must be an positive integer',
    'Parameter passed in must be an negative integer in MediumExercise11');
  console.assert(returnsLastNumberFactorial('ew') === 'Parameter passed in must be an positive integer',
    'Parameter passed in must be a string in MediumExercise11');
  console.assert(returnsLastNumberFactorial(0) === 1, 'Error when entering number 0 in MediumExercise11');
}

module.exports = checkExercise;