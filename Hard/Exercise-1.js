  function reverseString() {//Quest 1
    let str = 'I am Doing JS';
    let newStr = ''
    for(let i = str.length - 1; i >= 0 ; i--)
    {
      newStr += str[i];
    }
    let newStr2 = newStr.split(' ');
    // console.log(newStrc2)
    let strFinish = '';
    for ( let i = newStr2.length - 1 ; i >=0; i--)
    {
        strFinish += newStr2[i] + " ";
    }
    console.log(strFinish)
  }
  reverseString()