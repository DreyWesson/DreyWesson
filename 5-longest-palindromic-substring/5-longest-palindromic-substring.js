/**
 * @param {string} s
 * @return {string}
 */


var longestPalindrome = function(s) {
    let oldLeft = 0, oldRight = 0;
    for (let i = 0; i < s.length; i++) {
        let left = i, right = i; 
        while (s[left] === s[right+1]) right++;
        while (s[left-1] && s[left-1] === s[right+1]) {
            left--;
            right++;
        } 
        if (right-left > oldRight-oldLeft)
          [oldRight,oldLeft] = [right,left];
    } 
    return s.substring(oldLeft,oldRight+1);
};