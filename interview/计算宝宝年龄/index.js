// 给定宝宝的出生日期 baby_birthday，比如 2015-04-03，
// 和当前的日期，比如 2019-07-07，计算宝宝的年龄，精确到月，比如给定例子中宝宝的年龄为： 4 岁 3 个月，
// 返回 Object {age: 4, month: 3} 
// 函数原型示例： 
// babyBirthday = "2015-04-03" 
// currentDate = "2019-07-07" 
function calBabyAge(babyBirthday, currentDate) {    
   // 补充代码，实现功能
   let m = babyBirthday.split("-");
   let n = currentDate.split("-");
  //  console.log(m);
  let mArr = [];
  let nArr = [];
  m.forEach(item => {
    mArr.push(item)
  })
  n.forEach(item => {
    nArr.push(item);
  })
  const babyYear = mArr[0];
  const badyMonth = parseInt(mArr[1]);
  const currentYear = nArr[0];
  const currentMonth = parseInt(nArr[1]);
   
  if(badyMonth <= currentMonth) {
    let age = currentYear-babyYear;
    let month = currentMonth-badyMonth
    return {age: age, month: month}
  } else {
    let age = currentYear-babyYear-1;
    let month = 12-badyMonth+currentMonth;
    return {age: age, month: month}
  }
  //  return case: return {age: 4, month: 3} 
  }
  // calBabyAge("2015-04-03", "2019-07-07")
  console.log(calBabyAge("2015-04-03", "2016-03-07"))