/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let tail = 0,
    head = 1;
  while (head < nums.length) {
    if (nums[head] === nums[tail]) {
      nums.splice(head, 1);
    } else {
      tail++;
      head++;
    }
  }
  console.log(nums);
};