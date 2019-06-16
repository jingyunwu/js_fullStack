
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