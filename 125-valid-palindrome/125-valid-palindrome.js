/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(str) {
      if (str.length === 0) return true;
    str = str.toLowerCase()
    let tmp =""
    function isAlphaNumericChar(char) {
        return char.match(/[a-zA-Z0-9]/) ? true : false ;
    }
    for (let i = 0; i < str.length; i++) 
        if (isAlphaNumericChar(str[i])) tmp += str[i];
      let i = 0;
      let j = tmp.length - 1;
      while (i < j) {
        if (tmp[i] !== tmp[j]) return false;
        j--;
        i++;
      }
      return true;
};