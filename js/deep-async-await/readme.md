# async
async 函数就是 Generator 函数的语法糖
```js
function* test () {
      let a = yield 1
      console.log(a);
      let b = yield 2;
      console.log(b);
      let c = yield 3;
      console.log(c);
    }
    // 惰性的
    var g = test();
    // 生成一个  对象 { next }
    // 调用 next 一步一步执行
    // g.next()
    // g.next()
    // g.next()
  ```
  通过 g.next() 一步一步调用
  每一步调用 执行到 yield 关键词
  通过传参  做可做为上一个 yield 语句的返回值

  ## 
  {
    test: /\.js$/
    use: ['babel-loader']
  }
  .babelrc

  ## Promise.resolve
  返回一个  Promise
  1. 如果是 一个 promise 返回应该 promise
  2. 如果是一个基本类型的值  resolve(该值)
