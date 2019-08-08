var b = 10;
(function b(){
    b = 20;
    console.log(b); 
})();

// 函数表达式与函数声明不同，函数声明只在函数内部有效，并且此绑定是常量绑定
// 不能对常量进行赋值  在立即执行函数中 函数声明相当于const一个常量
// const b = function() {}
// b = 20
// console.log(b)  所以报错   要想不报错 可以将  let b = 20  然后就会输出 20
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