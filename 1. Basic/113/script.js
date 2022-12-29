"use strict";
// Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + ....
// where n is a positive integer and all divisions are integer.
function calculateSum(num) {
    let sum = 0;
    while (num > 0) {
        sum += num;
        num = Math.floor(num / 2);
    }
    return sum;
}
console.log(calculateSum(8));
console.log(calculateSum(9));
console.log(calculateSum(26));
// 15
// 16
// 49
