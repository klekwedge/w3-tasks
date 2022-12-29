"use strict";
// Write a JavaScript program to get the largest even number from an array of integers.
function findMaxEven(arr) {
    return Math.max(...arr.filter((item) => item % 2 === 0));
}
console.log(findMaxEven([20, 40, 200]));
console.log(findMaxEven([20, 40, 200, 301]));
console.log(findMaxEven([11, 212, 2756543, 20, 40, 200, 301]));
// 200
// 200
// 212
