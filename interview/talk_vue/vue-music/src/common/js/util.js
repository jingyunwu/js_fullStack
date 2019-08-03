// 获取随机数
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// 防抖
export function debounce (func, delay) {
  let previous = 0, timer = null;
  // 将debounce当作函数返回
  return function(...args) {
    // 获取当前时间的时间戳
    let now = +new Date();
    if(now - previous < delay) {
      // 如果点击时间间隔小于delay， 将再次设立新的定时器
      if(timer) {clearTimeout(timer)}
      timer = setTimeout(() => {
        previous = now;
        func.apply(this, args)
      }, delay);
    } else {
      // 第一次执行
      // 或者时间间隔超出设定的时间间隔, 执行func
      previous = now;
      func.apply(this, args)
    }
  }
}

export function shuffle (arr) {
  let _arr = arr.slice(0) // 浅拷贝
  for (let i = 0; i < arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }

  return _arr
}