  function concatArr() {//function concat two array
    let a = [2, 5, 7, 4, 8, 9];
    let b = [89, 35, 37, 40, 88]
    let c = []
    for( let i = 0; i <2*(a.length-1); i++ )
    {
      if(i<a.length)
      {
        c[i] = a[i]
      }
      else
      {
        c[i] = b[i-b.length];
      }
    }
    console.log('Array ' + a + ' concat array ' + b + ' is: ',c)
  }
  concatArr()