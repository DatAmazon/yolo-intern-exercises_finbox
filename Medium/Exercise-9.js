  function countElementAInB() { //Quest10
      let arr1 = [5,10,3,80,90,30,8]
      let arr2 = [5,10,3,80,90]
      let count=0
      for (let i = 0; i < arr1.length ; i++){
          for (let j =0 ; j < arr2.length ; j++)
          {
              if(arr1[i] == arr2[j])
              {
                  count++
              }
          }
      }
      console.log('Count elements in arr2 exist in arr1 is : ', count)
  }
  countElementAInB()
