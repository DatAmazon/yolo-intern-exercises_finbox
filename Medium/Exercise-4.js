  function minusTwoArr() {//Arr1 minus Arr2
    let arr1 = [5,10,15,20,30,8]
    let arr2 = [8,16,13,80,60]
    let arrNew = []
    for (let i = 0; i < Math.max(arr1.length, arr2.length) ; i++)
    {
        arrNew[i] = (arr1[i] ||0) - (arr2[i] || 0)
    }
    console.log('New Array after being minused: ', arrNew)
  }
  minusTwoArr()

