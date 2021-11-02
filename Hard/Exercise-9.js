  function findStringAInStringB() {
    let a = 'I go to work today today I  work today'
    let b = 'today'
    let flag;
    let numberTimesAAppearsInB = 0;
    let lena = a.length
    let lenb = b.length
    for(let i = 0; i <= lena - lenb ; ++i){
      if(a[i] == b[0])
      {
        flag = 1;
        for(let j=1; j<lenb; ++j)
        {
          if(a[i + j] != b[j])
          {
            flag = 0;
          }
        }
        ++numberTimesAAppearsInB;
        console.log('Locations appear is: ' + i)
        i += lenb - 1;
       }
    }
    console.log('Times appear is: ' + numberTimesAAppearsInB);
}
findStringAInStringB()