/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) return false;
  const lhs = [];
  const lhChars = new Set("{([<");
  const rhChars = new Set("})]>");
    let result = false;
  const obj = {
    "{": "}",
    "}": "{",
    "]": "[",
    "[": "]",
    "<": ">",
    ">": "<",
    "(": ")",
    ")": "(",
  };

  for (let i = 0; i < s.length + 1; i++) {
    const element = s[i];
    if (lhChars.has(element)) lhs.push(element);
    else if (rhChars.has(element)) {
        if (obj[element] === lhs[lhs.length - 1]) { 
            lhs.pop(element);
            result = true
        }
      else return false;
    }
  }
    if (lhs.length > 0) result = false
  return result;
};