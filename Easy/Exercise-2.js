
  function powAB() {
    let a = 5
    let b = 6
    let c = 1
    for(let i = 1; i <= b; i++ )
    {
      c *= a
    }
    console.log(a + ' ^ ' + b +' is: '+ c)
  }
  powAB();