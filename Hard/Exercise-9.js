const checker = require('./Test/Test-Function');
function sumStringAInStringB(strA, strB) {
  if (!checker.isString(strA) || !checker.isString(strB))//The input value must be a string
  {
    return 'Parameter passed in must be a string';
  }
  let flag;
  let numberTimesAAppearsInB = 0;
  let lenStrA = strA.length;
  let lenStrB = strB.length;
  for(let i = 0; i <= lenStrA - lenStrB ; ++i)
  {
    if(strA[i] === strB[0])
    {
      flag = 1;
      for(let j = 1; j < lenStrB; ++j)
      {
        if(strA[i + j] !== lenStrB[j])
        {
          flag = 0;
        }
      }
      ++numberTimesAAppearsInB;
    }
  }
  if(numberTimesAAppearsInB === 0)
  {
    return ('strB not exists in strA');
  }
  else
  {
    return numberTimesAAppearsInB;
  }

}
module.exports = sumStringAInStringB;