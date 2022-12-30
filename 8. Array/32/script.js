"use strict";
// Write a JavaScript function to find an array contains a specific element.
// Test data :
// arr = [2, 5, 9, 6];
// console.log(contains(arr, 5));
// [True]
function contains(arr, el) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === el) {
            return true;
        }
    }
    return false;
}
const arr = [2, 5, 9, 6];
console.log(contains(arr, 5));
// true
