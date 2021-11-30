function calculatePriceMotel(checkin, checkout) {
  let money = 0;
  if (checkin < 24 && checkout <= 24 && checkin >= 0 && checkout >= 0 && checkin % 1 == 0 && checkout % 1 == 0) {
    if (checkout < checkin && checkout > 8 && 24 - checkin > 2)
      //using the room overnight and pay > 8:00.am and set room > 22:00 pm
    {
      return money = 140000 + (22 - checkin) * 50000 + 160000 + (checkout - 8) * 40000;
    }
    if (checkout < checkin && checkout <= 8 && checkin < 24 && 24 - checkin <= 2)
      //using the room overnight and pay <= 8:00.am and set room <= 22:00 pm
    {
      return money = 160000 + (24 - checkin) * 70000;
    } else if (checkout < checkin && checkout <= 8 && checkin < 24 && 24 - checkin >= 2)
      //using the room overnight and pay <= 8:00.am and set room >= 22:00 pm
    {
      return money = 160000 + 140000 + (24 - checkin - 2) * 50000;
    } else if (checkout < checkin && checkout > 8)//using the room overnight and pay after 8:00.am
    {
      return money = 160000 + (checkout - 8) * 40000;
    } else if (checkout - checkin <= 2)//using the room less than 2 hours
    {
      return money = (checkout - checkin) * 70000;
    }
    if ((checkout - checkin) > 2)//using the room greater than 2 hours
    {
      return money = 140000 + (checkout - checkin - 2) * 50000;
    }
  } else {
    return 'Parameter passed in must be a positive integer, checkin < 24 and checkout <= 24';
  }
}

module.exports = calculatePriceMotel;