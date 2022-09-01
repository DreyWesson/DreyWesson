/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const memo ={}
    for (let i = 0; i < s.length; i++) {
        if (memo[s[i]]) memo[s[i]]++;
         else memo[s[i]] = 1
    }
    for (let i = 0; i < s.length; i++) 
        if (memo[s[i]] === 1) return i;
    return -1
};

firstUniqChar("aabb")