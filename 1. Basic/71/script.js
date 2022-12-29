"use strict";
// Write a JavaScript program to check whether 1 appears in
// first or last position of a given array of integers. The
// array length must be greater or equal to 1.
function checkEl(arr) {
    if (arr.length < 1) {
        return false;
    }
    return arr[0] === 1 || arr[arr.length - 1] === 1;
}
console.log(checkEl([1, 5, 6]));
console.log(checkEl([16, 1, 3]));
console.log(checkEl([1, 0, 1]));
console.log(checkEl([0, 2, 3]));
console.log(checkEl([6, 1, 6]));
// true
// false
// true
// false
// false
