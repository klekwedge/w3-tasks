"use strict";
// Write a JavaScript function to get nth largest element from an unsorted array.
// Test Data :
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89
function nthlargest(arr, num) {
    if (arr.length < num) {
        return null;
    }
    return arr.sort((a, b) => b - a)[num - 1];
}
console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89
