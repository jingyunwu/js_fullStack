// 1000s
// sleep(3000);
// console.log('helloworld');
// 实现一个功能 + 发散理解

// const sleep = time => {
//   return new Promise((resolve, reject) => setTimeout(resolve, time)) 
// }
// sleep(1000)
//   .then(() => {
//     console.log('来了, 老弟');
//   })

// function *sleepGenerator(time) {
//   yield new Promise((resolve, reject) => {
//     setTimeout(resolve, time);
//   });
//   console.log('aaaaa');
// }
// sleepGenerator(1000)
//   .next()
//   .value
//   .then(() => {
//     console.log('一千年以后');
//   })

// console.log(sleepGenerator().next().value.then(() => {
//   console.log('1111');
// }));

// function sleep(time) {
//   return new Promise(resolve => setTimeout(resolve, time))
// }
// async function output() {
//   let out = await sleep(1000);
//   console.log(1);
//   return out;
// }
// output();

function sleep(callback, time) {
  if (typeof callback === 'function') {
    setTimeout(callback, time);
  }
}
sleep(function() {
  console.log('一万年');
}, 1000)