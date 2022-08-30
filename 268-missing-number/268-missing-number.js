/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
   if (nums.length === 1) {
        if (nums[0] > 0) return 0
        else return 1
    }
    if (!nums.includes(0)) return 0;
    
      let setData = new Set(nums);
  let count = 0;
  for (let i = 1; i <= setData.size; i++) {
    count++;
    if (!setData.has(i)) {
      return i;
    }
  }
  return setData.size + 1;
};