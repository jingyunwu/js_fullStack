let arr = [10, 4, 6, 2, 8, 10, 5]
// 找出第 k 大的数
function kthlargest(nums, k) {
  if(k < 0 || k > nums.length - 1) return NaN;
  return nums.sort((a, b) => b-a)[k-1];
}
console.log(kthlargest(arr, 5));