function cutStringByStartPositionAndNumNextCut(start, numNext) {
  let str = 'This is example for function cut string';
  let newStr = '';
  if( start % 1 !== 0 || start < 0 || numNext % 1 !== 0 || numNext < 0)
  {
    return 'start and end must be a positive integer';
  }
  if((start + numNext) >= str.length )
  {
    return 'start + numNext must be shorter than str.length';
  }
  for(let i = start; i <= (start + numNext); i++)
  {
    newStr += str[i];
  }
  return newStr;
}
module.exports = cutStringByStartPositionAndNumNextCut;
