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

var myArry = [1, 2, 3, 4, 5, 6, 7]
for (let m of myArry) {
  console.log(m);  // 1, 2, 3...  值
}

Array.prototype.method = function() {
  console.log('wn')
}

for (let m in myArry) {
  console.log(m);  // 0, 1, 2...  下标
}

// for in 
// 1. m 索引为字符串型的数字, 不能直接进行几何运算  可以用 Number(m) 变成数字
// 2. 遍历顺序有可能不是按照实际数组的内部顺序进行的
// 3. 使用 for in 会遍历数组所有可枚举属性，包括原型链，所以for in 更适合遍历对象

// for of
// for in 遍历的是数组的索引，for of 遍历的是数组的元素
// for of 遍历的只是数组内的元素，而不包括数组原型属性和索引


let gArr = [1, 2, [3, 4], 5, [2, 7, [3, 9]]]  // 递归
let oArr = [1, 2, 3, 4, 5, 2, 7, 3, 9]

// 递归方法
function outputArr(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      res = res.concat(outputArr(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  return res
}

// reduce方法
function outputArr2(arr) {
  return arr.reduce(function(pre, item) {
    return pre.concat(Array.isArray(item) ? outputArr2(item) : item)
  }, [])
}

console.log(outputArr(gArr));