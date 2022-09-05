/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
        const memo = {}
    for (let i=0; i < nums.length; i++){
        if (memo[nums[i]]) memo[nums[i]]++;
        else memo[nums[i]] = 1;
    }
    const result = []
    for (const key in memo)
        if (memo[key] === 1) result.push(key);
    return result
};