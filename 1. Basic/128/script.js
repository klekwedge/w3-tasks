"use strict";
// Write a JavaScript program to find the smallest round number that
// is not less than a given value. Note: A round number is informally
// considered to be an integer that ends with one or more zeros.
// So, 590 is rounder than 592, but 590 is less round than 600.
function nearestRoundNumber(num) {
    while (num % 10) {
        num++;
    }
    return num;
}
console.log(nearestRoundNumber(56));
console.log(nearestRoundNumber(592));
console.log(nearestRoundNumber(750));
// 60
// 600
// 750
