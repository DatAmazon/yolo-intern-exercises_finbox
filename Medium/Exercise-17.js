  function cutStringByStartEndPosition() {//Quest18
    let str = 'This is example for function cut string'
    let newStr = '', start = 8, end = 31
    for(let i=start ; i <= end; i++)
    {
      newStr += str[i]
    }
    console.log('New string after being cut: ',newStr)
  }
  cutStringByStartEndPosition()