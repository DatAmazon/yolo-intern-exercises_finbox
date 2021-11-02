  function personalIncomeTax() {
    let incomePersonInMonth =  [60000000, 30000000, 10000000 ]
    let tax =0
    let sum = 0
    for(let i=0; i < incomePersonInMonth.length; i++)
    {
      if(incomePersonInMonth[i] > 50000000)
      {
        tax = incomePersonInMonth[i] * 20/100;
        sum += tax;
      }
      if(incomePersonInMonth[i] > 20000000 && incomePersonInMonth[i] <50000000)
      {
        tax = incomePersonInMonth[i] * 10/100;
        sum += tax;
      }
      if(incomePersonInMonth[i] < 20000000 )
      {
        tax = incomePersonInMonth[i] * 5/100;
        sum += tax;
      }
    }
    console.log('Sum tax that Person have to pay is: ', sum)
  }
  personalIncomeTax()

