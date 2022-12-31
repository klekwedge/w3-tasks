"use strict";
// Write a JavaScript program that takes an array of numbers and returns the third smallest number.
// Test Data :
// (2,3,5,7,1) -> 3
// (2,3,0,5,7,8,-2,-4) -> 0
// Expected Output:
// Original array of numbers: 2,3,5,7,1
// Third smallest number of the said array of numbers: 3
// Original array of numbers: 2,3,0,5,7,8,-2,-4
// Third smallest number of the said array of numbers: 0
function test(arr) {
    return arr.sort((a, b) => a - b)[2];
}
let nums = [2, 3, 5, 7, 1];
console.log(test(nums));
nums = [2, 3, 0, 5, 7, 8, -2, -4];
console.log(test(nums));
// 3
// 0
