/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const memo ={}
  let max = 0;
  let result = "";
    for (let i = 0; i < nums.length; i++) {
      (!memo[nums[i]]) 
        ? (memo[nums[i]] = 1)
        : memo[nums[i]]++
    }
  for (let key in memo){
    if(memo[key] > max){
      result = key;
      max = Math.max(max, memo[key])
    }
  }
  return result;
};