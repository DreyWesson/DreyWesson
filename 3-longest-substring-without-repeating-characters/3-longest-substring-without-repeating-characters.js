/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {
let maxLength = 0;
  let newString = "";
  let firstOccurrencePos = 0;

  for (let head = 0; head < str.length; head++) {
    const element = str.charAt(head);
    firstOccurrencePos = newString.indexOf(element);
    newString += element;
    if (firstOccurrencePos !== -1)
      newString = newString.substr(firstOccurrencePos + 1);
    maxLength = Math.max(maxLength, newString.length);
  }
  return maxLength;
};