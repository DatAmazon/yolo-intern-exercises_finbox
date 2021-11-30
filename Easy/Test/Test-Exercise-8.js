const  checkPrimest = require('../Exercise-8');

function checkExercise() {
  console.assert(checkPrimest(-101) === false, 'Error when entering integer negative in EasyExercise-8');
  console.assert(checkPrimest(100) === false, 'Error when entering integer positive in EasyExercise-8');
  console.assert(checkPrimest(97) === true, 'Error when entering integer positive in EasyExercise-8');
  console.assert(checkPrimest(43.43) === false, 'Error when entering decimals in EasyExercise-8');
  console.assert(checkPrimest('sas') === false, 'Error when entering string in EasyExercise-8');
  console.assert(checkPrimest(0) === false, 'Error when entering number 0in EasyExercise-8');
}
module.exports = checkExercise;