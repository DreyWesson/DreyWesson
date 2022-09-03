/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // let isNeg = (n < 0)? true : false;
    // n = Math.abs(n);
    // let sum = 1;
    // for(let i = 0; i < n; i++) sum *= x;
    // if (isNeg) sum = 1 / sum;
    // return sum.toFixed(5)
    return Math.pow(x,n)
};