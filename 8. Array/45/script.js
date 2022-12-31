"use strict";
// Write a JavaScript program to find all unique values in an given array of numbers.
// Test Data :
// [1, 2, 2, 3, 4, 4, 5]
// [1, 2, 3, 4, 5]
// [1, -2, -2, 3, 4, -5, -6, -5]
// Expected Output:
// [1,2,3,4,5]
// [1,2,3,4,5]
// [1,-2,3,4,-5,-6]
function uniqueElements(arr) {
    return [...new Set(arr)];
}
console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5]));
console.log(uniqueElements([1, 2, 3, 4, 5]));
console.log(uniqueElements([1, -2, -2, 3, 4, -5, -6, -5]));
// [ 1, 2, 3, 4, 5 ]
// [ 1, 2, 3, 4, 5 ]
// [ 1, -2, 3, 4, -5, -6 ]
