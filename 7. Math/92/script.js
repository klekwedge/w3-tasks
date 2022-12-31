"use strict";
// Write a program that takes a positive integer and
// calculate the cube root of the number until the number
// is less than three. Return the number of steps to
// complete the said process.
// Test Data:
// (27) -> 2
// (10000) -> 2
// (-100) -> "Not a positive number!"
function test(num) {
    let counter = 0;
    while (num >= 3) {
        num = num ** (1 / 3);
        counter++;
    }
    return counter;
}
let n = 27;
console.log(test(n));
n = 10000;
console.log(test(n));
n = -100;
console.log(test(n));
// 2
// 2
// 0
