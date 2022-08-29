/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(str, needle) {
return needle ?  str.indexOf(needle) : -1;
};