function cutStringByStartEndPosition(start, end) {
  let str = 'This is example for function cut string';
  let newStr = '';
  if( start % 1 !== 0 || start < 0 || end % 1 !== 0 || end < 0)
  {
    return 'start and end must be a positive integer';
  }
  if(start > end || start >= str.length || end >= str.length )
  {
    return 'start must be shorter than end; start, end must be shorter than str.length';
  }
  for(let i = start ; i <= end; i++)
  {
    newStr += str[i];
  }
  return newStr;
}
module.exports = cutStringByStartEndPosition;