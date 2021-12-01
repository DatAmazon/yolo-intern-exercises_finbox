const findNumberMinMoney = require('../Exercise-8')

function checkExercise() {
  console.assert(findNumberMinMoney(8797000) === 'The amount of 500000 is: 17 ; 200000 is: 1 ; 100000 is: 0 ' +
    '; 50000 is: 1 ; 20000 is: 2 ; 10000 is: 0 ; 5000 is: 1 ; 2000 is: 1 ; 1000 is: 0', 'Error when entering positive integer in HardExercise-8');
  console.assert(findNumberMinMoney(-1000000) === 'The amount is a positive integer and multiple of 1000',
    'Error when entering negative integer in HardExercise-8');
  console.assert(findNumberMinMoney('dd') === 'The amount is a positive integer and multiple of 1000',
    'Error when entering character  in HardExercise-8');
  console.assert(findNumberMinMoney(0) === 'The amount of 500000 is: 0 ; 200000 is: 0 ; 100000 is: 0 ; 50000 is: 0 ; 20000 is: 0 ;' +
    ' 10000 is: 0 ; 5000 is: 0 ; 2000 is: 0 ; 1000 is: 0', 'Error when entering number 0  in HardExercise-8');
  console.assert(findNumberMinMoney(2445453) === 'The amount is a positive integer and multiple of 1000',
    'Error when entering number not multiple of 1000 in HardExercise-8');
}

module.exports = checkExercise;