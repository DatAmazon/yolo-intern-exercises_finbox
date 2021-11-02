  function findNumberMinMoney(total){
    let m500 = 0, m200 = 0, m100 = 0, m50 = 0, m20 = 0, m10 = 0, m5 = 0, m2 = 0, m1 = 0;//m stands for money
    m500 = (total - (total % 500000))/ 500000
    total = total - (m500 * 500000)
    m200 = (total - (total % 200000))/ 200000
    total = total - (m200 * 200000)
    m100 = (total - (total % 100000))/ 100000
    total = total - (m100 * 100000)
    m50 = (total - (total % 50000))/ 50000
    total = total - (m50 * 50000)
    m20 = (total - (total % 20000))/ 20000
    total = total - (m20 * 20000)
    m10 = (total - (total % 10000))/ 10000
    total = total - (m10 * 10000)
    m5 = (total - (total % 5000))/ 5000
    total = total - (m5 * 5000)
    m2 = (total - (total % 2000))/ 2000
    total = total - (m2 * 2000)
    m1 = (total - (total % 1000))/ 1000
    total = total - (m5 * 1000)

    console.log('The amount of 500000 is: ', m500)
    console.log('The amount of 200000 is: ', m200)
    console.log('The amount of 100000 is: ', m100)
    console.log('The amount of 50000 is: ', m50)
    console.log('The amount of 20000 is: ', m20)
    console.log('The amount of 10000 is: ', m10)
    console.log('The amount of 5000 is: ', m5)
    console.log('The amount of 2000 is: ', m2)
    console.log('The amount of 1000 is: ', m1)
  }
  findNumberMinMoney(875000)