"use strict";
// Write a JavaScript program that takes three arguments x, y, n and
// calculate the sum of the numbers that are oddly divided by n from
// the range x, y inclusive.
// Test Data:
// (1,5,3) -> 3
// (100, 1000, 5) -> 99550
function test(x, y, n) {
    let sum = 0;
    for (let i = x; i <= y; i++) {
        sum += i % n === 0 ? i : 0;
    }
    return sum;
}
let x = 1;
let y = 5;
let n = 3;
console.log(test(x, y, n));
x = 100;
y = 1000;
n = 5;
console.log(test(x, y, n));
// 3
// 99550
