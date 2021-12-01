const countAppear0InFactorial = require('../Exercise-12')

function checkExercise() {
  console.assert(countAppear0InFactorial(0) === 0, 'Error when entering number 0 in HardExercise-12');
  console.assert(countAppear0InFactorial(10) === 2, 'Error when entering positive integer in HardExercise-12');
  console.assert(countAppear0InFactorial(-20) === 'Parameter passed in must be an positive integer',
    'Error when entering negative integer in HardExercise-12');
  console.assert(countAppear0InFactorial('ds') === 'Parameter passed in must be an positive integer',
    'Error when entering character in HardExercise-12');
  console.assert(countAppear0InFactorial([4.5, 6]) === 'Parameter passed in must be an positive integer',
    'Error when entering array in HardExercise-12');
}

module.exports = checkExercise;