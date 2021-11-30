const checker = require('./Test-Function');
const calculatePriceMotel = require('../Exercise-13');
function checkExercise() {
  console.assert(calculatePriceMotel(1, 3) === 140000,
    'Error when checkin < checkout and number of hours of use <= 2 in MediumExercise-13');
  console.assert(calculatePriceMotel(1, 6) === 290000,
    'Error when checkin < checkout and number of hours of use > 2 in MediumExercise-13');
  console.assert(calculatePriceMotel(22, 8) === 300000, 'Error when used overnight in MediumExercise-13');
  console.assert(calculatePriceMotel(20, 10) === 480000, 'Error when used overnight and checkout > 8 in MediumExercise-13');
  console.assert(calculatePriceMotel(2.43, 10) === 'Parameter passed in must be a positive integer, checkin < 24 and checkout <= 24',
    'Error when entering decimals in MediumExercise-13');
  console.assert(calculatePriceMotel('sd', 10) === 'Parameter passed in must be a positive integer, checkin < 24 and checkout <= 24',
    'Error when entering character in MediumExercise-13');
  console.assert(calculatePriceMotel(-4, 10) === 'Parameter passed in must be a positive integer, checkin < 24 and checkout <= 24',
    'Error when entering negative number in MediumExercise-13');
  console.assert(calculatePriceMotel(24, 10) === 'Parameter passed in must be a positive integer, checkin < 24 and checkout <= 24',
    'Error when entering checkin >= 24 in MediumExercise-13');
  console.assert(calculatePriceMotel(2, 25) === 'Parameter passed in must be a positive integer, checkin < 24 and checkout <= 24',
    'Error when entering checkout > 24 in MediumExercise-13');
}
module.exports = checkExercise;