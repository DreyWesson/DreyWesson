/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(array, target) {
    let head = array.length - 1,
        tail = 0,
        mid = null;
    while (tail <= head) {
        mid = ((head + tail) / 2) | 0;
        if (array[mid] === target) return mid;
        if (array[mid] > target) head = mid - 1;
         else tail = mid + 1;
    }
    return tail
};