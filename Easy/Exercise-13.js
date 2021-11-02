  function reverseArr() {
    let arr = [1, 4, 6, 7, 45, 34, 22, 100]
    for (let i = 0; i < arr.length / 2; i++)
    {
      [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
    }
    console.log(arr);
  }
  reverseArr()