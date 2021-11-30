// const checkerTestFunction = require('./Test/test-Function');
const  countEvenNumber = require('../Exercise-4');
function checkExercise() {
  console.assert(countEvenNumber([8, 53, 71, 64, 67, 45]) === 2, "Error when entering integer EasyExercise-4");
  console.assert(countEvenNumber([8, 10, 12, 'fs']) === 'Parameter passed in must be an integer',
    "Error when entering character EasyExercise-4");
  console.assert(countEvenNumber([8, 10, 12, 534.538]) === 'Parameter passed in must be an integer',
    "Error when entering decimals EasyExercise-4");
  console.assert(countEvenNumber([0, 0, -54, 67, -4, 168]) === 5,
    "Error when entering number 0 and negative number EasyExercise-4");
}
module.exports = checkExercise;
