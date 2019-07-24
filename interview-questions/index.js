// function Person(name) {
//   this.name = name
// }
// let p = new Person('wn')
// 1. p.__proto__ 等于什么 ... Person.prototype
// 2. Person.__proto__ == Function.prototype
// 3. Function.__proto__ == Object.prototype
// 实例的(隐式原型链) __proto__ 等于 其构造函数的prototype

var foo = {},
    F = function() {};
   
Object.prototype.a = 'valA'
Function.prototype.b = 'valB'
console.log(foo.a)  // valA
console.log(foo.b) // undefined
console.log(F.a) // valA
console.log(F.b) // valB

function Person(name) {
  this.name = name
  return 666  // 这里输出 Person { name: 'wn' }
  // return {}  这里输出 {}
}
let p = new Person('wn')
console.log(p);

// ------构造函数是不需要返回值的，使用new来创建对象时，如果 return 的是非对象类型，会忽略返回值，
//    如果 return的是对象 ，则返回该对象 (若 return null 也会忽略返回值)


// function Person1(name) {
//   this.name = name
// }
// function Student() {

// }
// Student.prototype = Person1.prototype
// Student.prototype.constructor = Student

// let s = new Student('wn')
// console.log(s instanceof Person1)
// console.log(s)

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 0)
// }

for (var i = 0; i < 10; i++) {
  (function(i) {
    setTimeout(() => {
      console.log(i)
    }, 0)
  })(i)
}
// -----let 每次循环会生成一个封闭的作用域和setTimeout绑定,
//   var 每次循环会覆盖掉上一次的作用域
//  除了用let 或者用闭包， 模拟块级作用域  也可以实现