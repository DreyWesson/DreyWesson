/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let head = 1;
    let max = 0;
    let tail = 0;
    let pos = null;

    while (head < prices.length) {
        const tailVal = prices[tail];
        const headVal = prices[head];
       let prevHead = prices[head - 1];
        if (tailVal > headVal) {
          if (prevHead > headVal) {
            tail = head;
          } else tail++;
        } else if (tailVal < headVal) {
            let diff = headVal - tailVal;
            if (diff > max) {
                max = diff;
                pos = [tail, head];
            }
        }
        head++;
    }
    return max;
};