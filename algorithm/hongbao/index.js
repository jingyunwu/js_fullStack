function hongbao(total,num) {
  const arr = [];
  let restAmount = total; //余额初始化为总金额
  let restNum = num;

  for (let i = 0;i < num - 1; i++) { //剩一个人先不发
    // 平均值的2倍
     let amount = parseFloat(Math.random() * (restAmount/restNum * 2)).toFixed(2);
     restAmount -= amount;
     restNum--;
     arr.push(amount);

  }
  //最后一个人restAmount
  arr.push(restAmount.toFixed(2));

  return arr;   

}
console.log(hongbao(20,44));