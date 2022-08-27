/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let tail = 1;

  for (let head = 1; head < nums.length; head++) {
    if (nums[head] != nums[head - 1]) {
      nums[tail] = nums[head];
      tail++;
    }
  }
  return tail;
};