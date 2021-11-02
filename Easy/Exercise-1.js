
  function changeLocation3Nums() {
    let a = 4
    let b = 5
    let c = 6
    console.log('Original order ',a, b, c)
    let d=c
    c=b;
    b=a;
    a=d;
    console.log('New order: ',a, b, c)
  }
  changeLocation3Nums();