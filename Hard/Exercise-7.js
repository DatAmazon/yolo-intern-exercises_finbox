function calculationFormula( number) { //formula for calculating units of money
  let hundred = 0
  let dozel = 0
  let unit = 0
  hundred = (number - number % 100) / 100;
  number = number - (hundred * 100);
  dozel = (number - number % 10) / 10;
  number = number - (dozel * 10);
  unit = number;
  return changeNumtoText(hundred) + ' trăm ' + changeNumtoText(dozel) + ' mươi '+ changeNumtoText(unit)
}
function changeNumtoText(num) {// change money from number to text
  switch(num){
    case 0: return 'không';
      break
    case 1:return('Một')
      break
    case 2:return('hai')
      break
    case 3:return('ba')
      break
    case 4:return('bốn')
      break
    case 5:return('năm')
      break
    case 6:return('sáu')
      break
    case 7:return('bảy')
      break
    case 8:return('tám')
      break
    case 9:return('chín')
      break
  }
}
function changeMoneyFromNumberToText(moneyArr) {
  // number = 123 235 456 678
  let res = '';
  for(let i = moneyArr.length -1 ; i >= 0; i--)
  {
    switch(i)
    {
      case 2: res = ' nghìn ' + res;
        break;
      case 1: res = ' triệu ' + res;
        break;
      case 0: res = ' tỉ ' + res;
    }
    res = calculationFormula(moneyArr[i]) + ' ' +  res;
  }
  return res;
}
module.exports = changeMoneyFromNumberToText;
