/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
   if (nums.length === 1) return (nums[0] > 0)? 0 : 1;
  if (!nums.includes(0)) return 0;
  let setData = new Set(nums);
  for (let i = 1; i <= setData.size; i++) 
    if (!setData.has(i)) return i;
  return setData.size + 1;
};