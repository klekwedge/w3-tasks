"use strict";
// Write a JavaScript program that takes an array with mixed data type and
// calculate the sum of all numbers.
// Test Data :
// ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
// ([2, 3, 0, 5, 7, 8, true, false]) -> 25
// Expected Output:
// Original array: 2,11,3,a2,false,5,7,1
// Sum all numbers of the said array: 18
// Original array: 2,3,0,5,7,8,true,false
// Sum all numbers of the said array: 25
function test(arr) {
    return arr
        .filter((item) => typeof item === "number")
        .reduce((prev, next) => prev + next);
}
let arr = [2, "11", 3, "a2", false, 5, 7, 1];
console.log(test(arr));
arr = [2, 3, 0, 5, 7, 8, true, false];
console.log(test(arr));
// 18
// 25
