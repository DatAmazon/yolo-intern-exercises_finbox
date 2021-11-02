  function cutStringByStartPositionAndNumCut() {
    let str = 'This is example for function cut string'
    let newStr = '', start = 8, NumNext = 10
    for(let i=start ; i <= (start + NumNext) ; i++)
    {
      newStr += str[i]
    }
    console.log('New string after being cut: ',newStr)
  }
  cutStringByStartPositionAndNumCut()