function findKthLargest(nums, k) {
  const arr = quick_sort(nums);
  return arr[k-1];
}

function quick_sort(arr) {
  if(arr.length <= 1) return arr;
  let baseDot = Math.floor(arr.length/2);
  let base = arr.splice(baseDot, 1)[0];
  var left = [];
  var right = [];
  for(let i = 0; i < arr.length; i++) {  //O(N)
    if(arr[i] > base) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quick_sort(left).concat([base], quick_sort(right))  //递归  O(log2N)
}
console.log(findKthLargest([10, 4, 6, 2, 8, 10, 5], 5))