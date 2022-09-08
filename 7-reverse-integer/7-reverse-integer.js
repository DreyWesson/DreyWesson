/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = false;
    if (x < 0) sign = true
    x = +String(Math.abs(x)).split('').reverse().join('');
    if (x > 0x7FFFFFFF) 
        return 0;
    return sign ? -x : x;
};