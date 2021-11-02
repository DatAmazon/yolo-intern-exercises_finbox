  function concatArrSortDescending () {
    let a = [2, 5, 7, 8, 18];
    let b = [9, 35, 37, 40, 88,34, 67, 80, 34]
    let c = []
    for( let i = 0; i <= (a.length + b.length -1 ); i++ )
    {
        if(i<a.length)
        {
            c[i] = a[i]
        }
        else
        {
            c[i] = b[i-a.length];
        }

    }
    // console.log('Concat array a with array b:  ', c)
    var temp = 0;
    for (var i = 0; i < c.length; i++) {
        for (var j = i; j < c.length; j++)
        {
            if (c[j] > c[i])
            {
                temp = c[j];
                c[j] = c[i];
                c[i] = temp;
            }
        }
    }
    console.log('Sort from bigest to smallest:  ', c)
}
concatArrSortDescending ()
