const checker = require('./Test-Function');
const changeMoneyFromNumberToText = require('../Exercise-7')
function checkExercise() {
  console.assert(changeMoneyFromNumberToText([123, 234, 456, 567]) === 'Một trăm hai mươi ba  tỉ hai trăm ba' +
    ' mươi bốn  triệu bốn trăm năm mươi sáu  nghìn năm trăm sáu mươi bảy ', 'Error when enter money is positive integer in HardExercise-3');
  console.assert(changeMoneyFromNumberToText([393, 204, 406, 567]) === 'ba trăm chín mươi ba  tỉ hai trăm không' +
    ' mươi bốn  triệu bốn trăm không mươi sáu  nghìn năm trăm sáu mươi bảy ', 'Error when entering amount with tens equals 0 in HardExercise-3');
}
module.exports = checkExercise;