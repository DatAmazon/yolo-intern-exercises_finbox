const checker = require('./Test/Test-Function');

function averageArr(a) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (!checker.checkDecimal(a[i])) {
      return 'Parameter passed in must be an integer or decimal';
    }
    sum += a[i];
    count++;
  }
  return (sum / count);
}
module.exports = averageArr;


