/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(str, needle) {
     const needleLen = needle.length,
           strLen = str.length
  if (!needleLen) return 0;
    if (needleLen > strLen) return -1;
    let tmp = '',
        list = -1;
  for (let i = 0; i < strLen; i++) {
    if (str[i] === needle[0]){
        let newVal = str.substr(i,needleLen)
      tmp = newVal === needle && newVal
      if (tmp){
        list = i;
        break;
      }
    }
  }
  return list
};