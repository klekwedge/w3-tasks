"use strict";
// Write a JavaScript program to check if an array
// of integers has an downward trend or not.
// Test Data:
// ([1, 3, 4, 7, 9, 10, 11]) -> false
// ([11, 10, 9, 7, 4, 3, 2, 0]) -> true
// ([1, 0, -2, -3, -12]) -> true
function test(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            return false;
        }
    }
    return true;
}
let nums = [1, 3, 4, 7, 9, 10, 11];
console.log(test(nums));
nums = [11, 10, 9, 7, 4, 3, 2, 0];
console.log(test(nums));
nums = [1, 0, -2, -3, -12];
console.log(test(nums));
// false
// true
// true
