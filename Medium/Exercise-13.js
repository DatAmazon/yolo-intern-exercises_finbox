  function calculatPriceMotel() {//Quest13
    let checkin = 15,checkout =3;
    let money = 0
    if(checkout - checkin <= 24)
    {
      if(checkout < checkin  && checkout <= 8 && checkin <24 && 24 - checkin <=2 )
      {
         money = 160000 + (24 - checkin) * 70000
       }
      else if(checkout < checkin  && checkout <= 8 && checkin <24 && 24 - checkin >=2 )
      {
        money = 160000 + 140000 + (24 - checkin -2 ) * 50000
      }
      else if(checkout < checkin  && checkout > 8 )
      {
        money = 160000 + (checkout - 8) * 40000
      }
        else if(checkout - checkin <= 2)
      {
        money = (checkout - checkin) * 70000
      }
      else if((checkout - checkin) > 2 )
      {
        money = 140000 + (checkout - checkin -2) * 50000
      }
      console.log('Total money pay is: ',money)
    }
    else
    {
      console.log('Invalid input')
    }
  }
  calculatPriceMotel()