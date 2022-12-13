"use strict";
// Write a JavaScript program to check whether 1 appears in
// first or last position of a given array of integers. The
// array length must be greater or equal to 1.
function calcSum(arr) {
    if (arr.length < 1) {
        return false;
    }
    return arr[0] === 1 || arr[arr.length - 1] === 1;
}
console.log(calcSum([1, 5, 6]));
console.log(calcSum([16, 1, 3]));
console.log(calcSum([1, 0, 1]));
console.log(calcSum([0, 2, 3]));
console.log(calcSum([6, 1, 6]));
// [ 5, 6, 1 ]
// [ 1, 1, 16 ]
// [ 0, 0, 0 ]
// [ 2, 3, 0 ]
// [ 1, 6, 6 ]
