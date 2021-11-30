const checker = require('./Test-Function');
const personalIncomeTax = require('../Exercise-14');
function checkExercise() {
  console.assert(personalIncomeTax([60000000, 30000000, 10000000]) === 15500000,
    'Error when entering positive integer in MediumExercise-14');
  console.assert(personalIncomeTax([5000000, 0, 10000000]) === 750000,
    'Error when entering number 0 in MediumExercise-14');
  console.assert(personalIncomeTax([600000, -600000, 600000]) === 'Invalid input',
    'Error when entering negative integer in MediumExercise-14');
  console.assert(personalIncomeTax([600000, 's', 600000]) === 'Invalid input',
    'Error when entering character in MediumExercise-14');
}
module.exports = checkExercise;