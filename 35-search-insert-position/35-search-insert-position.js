/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(array, target) {
    let tail = 0;
  let head = array.length - 1;
  let mid = null;
  if (tail > head) return false;
  while (tail <= head) {
    mid = ((head + tail) / 2) | 0;
    if (array[mid] === target) return mid;
    if (array[mid] > target) {
      head = mid - 1

    } else {
      tail = mid + 1      
    };
  }
return tail
    
};