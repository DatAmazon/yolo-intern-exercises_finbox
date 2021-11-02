function findLocationANumberInArr() {
    let arr = [1, 2, 3, 4, 5, 3,  6, 7];
    let a = 3
    let count = 0
    for( let i = 0; i < arr.length; i++)
    {
      if(arr[i] == a)
      {
        console.log('Location ' + a + ' in array arr is: '+ i);
        count ++
      }
      else if(arr[i] == arr[arr.length -1] && count == 0)
      {
        console.log(' No matching results.')
      }
    }
  }
  findLocationANumberInArr()
