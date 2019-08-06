//  默认有4毫秒的延迟
// setTimeout(function() {
//   console.log(2)
// }, 0)

// Promise.resolve().then(function() {
//   console.log(3)
// }).then(function() {
//   console.log(4)
// })

// process.nextTick(function() {
//   console.log(5)
// })

// console.log(1);


function sleep(num) {
  var now = new Date()
  var exitTime = now.getTime() + num;
  while (true) {
    now = new Date()
    if (now.getTime() > exitTime) return 
  }
}

console.log(1);
console.log(2);
sleep(2000);
console.log(3);