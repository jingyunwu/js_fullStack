var twoSum = function(nums, target) {
  for(var i = 0; i<nums.length; i++) {
      var a = target - nums[i];
      var b = nums.indexOf(a, i+1);
      if(b !== -1) {
          return [i, b];
      }
  }
};
console.log(twoSum([1,2,3,6,9], 9));