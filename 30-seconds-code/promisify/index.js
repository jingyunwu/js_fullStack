const fs = require('fs');
// const util = require('util');

// 1 输入一个函数
const promisify = (func) => {
  // args promisify 返回函数的传参
  // arguments
  return (...args) => {
    return new Promise((resolve, reject) => {
      // 把数组里面的 每一项  一次展开
      func(...args, (err, data) => {
        if (err) reject(err)
        resolve(data);
      }) 
    })
  }
}


const readFile = promisify(fs.readFile);  //const readFile = util.promisify(fs.readFile);
readFile('./index.html', { encoding: 'utf8' })
.then(res => {
  console.log(res);
})
// fs.readFile('./index.html', { encoding: 'utf8'}, (err, data) => {
//   if(!err) {
//     console.log(data);
//   }
// })

// fs.stat('.', (err, stats) => {
//   if(!err) {
//     console.log(stats);
//   }
// })