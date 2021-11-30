const checker = require('./Test/Test-Function.js')

function sortArrayAscending(array) {//sort an array of numbers in ascending
  let select = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (!checker.checkDecimal(array[i])) {
        return 'Parameter passed in must be a decimals';
      }
      if (array[j] < array[i]) {
        select = array[j];
        array[j] = array[i];
        array[i] = select;
      }
    }
  }
  return (array);
}
module.exports = sortArrayAscending;