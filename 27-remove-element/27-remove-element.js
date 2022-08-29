/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, k) {
   for (let i = 0; i < nums.length; i++) {
    if (nums[i] === k) nums[i] = undefined;
  }
  function fn(a) {
    return a !== undefined;
  }
  function filterInPlace(array, fn) {
    let from = 0,
      to = 0;
    while (from < array.length) {
      if (fn(array[from])) {
        array[to] = array[from];
        to++;
      }
      from++;
    }
    array.length = to;
  }
  filterInPlace(nums, fn);
};