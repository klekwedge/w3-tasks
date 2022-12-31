"use strict";
// Write a JavaScript program to calculate the sum of all odd
// elements in a square matrix.
// Test Data:
// ([ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]) -> 25
// ( [ [-1, -2], [-4, -5] ]) -> -6
function test(nums) {
    let cols = 0;
    for (let i = 0; i < nums.length; i++) {
        cols++;
    }
    if (nums.length !== cols) {
        return null;
    }
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (Math.abs(nums[i][j]) % 2 === 1) {
                sum += nums[i][j];
            }
        }
    }
    return sum;
}
let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(test(nums));
nums = [
    [-1, -2],
    [-4, -5],
];
console.log(test(nums));
// 25
// -6
