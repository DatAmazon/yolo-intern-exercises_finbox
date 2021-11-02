  function shuffleOrderElementNumInArray() {
    let arrA = [3, 54, 75, 34, 77, 29]
    let newArr = []
    for(let i = 0; i < arrA.length; i++)
    {
      if(i < arrA.length-1)
      {
        newArr[i +1] = arrA[i]
      }
      else if(i = arrA.length-1)
      {
        newArr[0] = arrA[arrA.length-1]
      }
    }
    console.log('New array after shiffle is: ',newArr)
  }
  shuffleOrderElementNumInArray()
