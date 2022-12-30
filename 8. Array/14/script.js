"use strict";
// Write a JavaScript program to compute the sum and product of an array of integers.
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
const arr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
console.log(removeDuplicates(arr));
// [
//   1, 2, 4, 5,
//   7, 8, 3, 6
// ]
