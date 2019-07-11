var arr = [10,20,5,8,21,100,99];
function test() {
    for(var i = 0; i < arr.length; i++) {
        for(var k = 0; k < arr.length-i-1; k++) {
            if(arr[k] > arr[k+1]){
                var temp = arr[k+1];
                arr[k+1] = arr[k];
                arr[k] = temp;
            }
        }
    }
    return arr;
}
console.log(test());

// 选择排序
function selectSort(arr) {
  var len = arr.length;
  var minIndex, temp;
  for(var i = 0; i < len -1; i++) {
    minIndex = i;
    for(var j = i + 1; j < len; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
// 每次让一个数排好，两两交换位置
var arr = [8, 2, 5, 9, 10, 6];
console.log(selectSort(arr));


