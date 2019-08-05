var b = 10;
(function b(){
    b = 20;
    console.log(b); 
})();

// 输出 [Function: b]

// var a = ?
// a 在什么情况下 会输出 "1"   "==" 的隐式转换 会用到 toString() 和  valueOf()
var a = {
  i: 1,
  // toString() {
  //   return a.i++;
  // }
  valueOf() {
    return a.i++
  }
}

if(a == 1 && a == 2 && a ==3) {
  console.log(1);
}