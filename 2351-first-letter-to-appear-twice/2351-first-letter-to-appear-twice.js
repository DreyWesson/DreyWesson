/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const memo ={}
    for (let i = 0; i < s.length; i++) {
        if (memo[s[i]]) {
            memo[s[i]]++;
            if (memo[s[i]] === 2) return s[i];
        }
         else memo[s[i]] = 1;
    }

    return -1
};