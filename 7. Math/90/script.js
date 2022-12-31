"use strict";
// Write a JavaScript program to check whether a number
// is a Harshad Number or not. Go to the editor
// In recreational mathematics, a harshad number
// in a given number base, is an integer that is
// divisible by the sum of its digits when written in that base.
// Test Data:
// (113) -> false
// (171) -> true
// (200) -> true
function test(num) {
    const sum = String(num)
        .split("")
        .map((item) => +item)
        .reduce((prev, next) => prev + next);
    return num % sum === 0;
}
let n = 113;
console.log(test(n));
n = 171;
console.log(test(n));
n = 200;
console.log(test(n));
// false
// true
// true
