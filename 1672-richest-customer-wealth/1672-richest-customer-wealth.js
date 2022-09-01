/**
 * @param {number[][]} accounts
 * @return {number}
 */
function reducer(arr) {
    return arr.reduce((a,b)=> a+b)
}
var maximumWealth = function(accounts) {
    let max = 0
    for (let i = 0; i < accounts.length; i++)
            max = Math.max(max, reducer(accounts[i]));
    return max
};