const  countOddNumbers = require('../Exercise-5');

function checkExercise() {
  console.assert(countOddNumbers([10, 34, 67, 4, 53, 543]) === 3, "Error when entering integer positive in EasyExercise-5");
  console.assert(countOddNumbers([-3, -43, -75, -41, -32, -45]) === 5, "Error when entering integer negative in EasyExercise-5");
  console.assert(countOddNumbers([-3, -43, -75, -41, 0, 30, 42]) === 4,
    "Error when entering integer negative and integer positive and number 0 in EasyExercise-5");
  console.assert(countOddNumbers(['sa', -43, -75, -41, 0, 30, 42]) === 'Parameter passed in must be an integer',
    "Error when entering character in EasyExercise-5");
  console.assert(countOddNumbers([343.342, -93.645 - 75, -41, 0, 30, 42]) === 'Parameter passed in must be an integer',
    "Error when entering decimals in EasyExercise-5");
}
module.exports = checkExercise;
