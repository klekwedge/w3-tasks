"use strict";
// Write a JavaScript program to check if an array is a factor chain or not.
// A factor chain is an array in which the previous element is a factor of
// the next consecutive element. The following is a factor chain:
// [2, 4, 8, 16, 32]
// 2 is a factor of 4
// 4 is a factor of 8
// 8 is a factor of 16
// 16 is a factor of 32
// Test Data :
// ([2, 4, 8, 16, 32]) -> true
// ([2, 4, 16, 32, 64]) -> true
// ([2, 4, 16, 32, 68]) -> false
// Expected Output:
// Original array:
// Check the said array is a factor chain or not?
// true
// Original array:
// Check the said array is a factor chain or not?
// true
// Original array:
// Check the said array is a factor chain or not?
// false
function test(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] % arr[i - 1] !== 0) {
            return false;
        }
    }
    return true;
}
let nums = [2, 4, 8, 16, 32];
console.log(test(nums));
nums = [2, 4, 16, 32, 64];
console.log(test(nums));
nums = [2, 4, 16, 32, 68];
console.log(test(nums));
// true
// true
// false
