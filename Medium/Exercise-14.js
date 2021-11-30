function personalIncomeTax(incomePersonInMonth) {
  let tax = 0;
  let sum = 0;
  for (let i = 0; i < incomePersonInMonth.length; i++) {
    if (incomePersonInMonth[i] < 0 || incomePersonInMonth[i] % 1 !== 0)
      //If variable a is an integer or decimal
    {
      return 'Invalid input';
    } else if (incomePersonInMonth[i] > 50000000) {
      tax = incomePersonInMonth[i] * 20 / 100;
      sum += tax;
    } else if (incomePersonInMonth[i] > 20000000 && incomePersonInMonth[i] < 50000000) {
      tax = incomePersonInMonth[i] * 10 / 100;
      sum += tax;
    } else if (incomePersonInMonth[i] < 20000000) {
      tax = incomePersonInMonth[i] * 5 / 100;
      sum += tax;
    }
  }
  return sum;
}

module.exports = personalIncomeTax;
