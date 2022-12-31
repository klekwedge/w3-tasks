"use strict";
// Write a JavaScript program to given two non-negative integers num1
// and num2 represented as string, return the sum of num1 and num2.
function test(num) {
    return String(num)
        .split("")
        .map((item) => (+item) ** 3)
        .join("");
}
let n = 11;
console.log(test(n));
n = 66;
console.log(test(n));
n = 336;
console.log(test(n));
n = 444;
console.log(test(n));
n = 1151;
console.log(test(n));
// 11
// 216216
// 2727216
// 646464
// 111251
