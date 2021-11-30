const  checker = require('./Test/Test-Function')
function LocationFirstStringAInStringB(strA, strB) {
  if (!checker.isString(strA) || !checker.isString(strB))//if strA or strB not a string data type
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
      for(let j = 0; j < lenStrB; ++j)
      {
        if(strA[i + j] !== lenStrB[j])
        {
          ++numberTimesAAppearsInB;
          return  (i + j);
        }
      }

    }
  }
  if(numberTimesAAppearsInB === 0)
  {
    return ('strB not exists in strA');
  }
}
module.exports = LocationFirstStringAInStringB;