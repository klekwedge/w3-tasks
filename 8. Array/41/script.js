"use strict";
// Write a JavaScript function to generate an array between two integers of 1 step length.
// Test Data :
// console.log(rangeBetwee(4, 7));
// [4, 5, 6, 7]
// console.log(rangeBetwee(-4, 7));
// [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
function rangeBetwee(start, end) {
    const res = [];
    for (let i = start; i <= end; i++) {
        res.push(i);
    }
    return res;
}
console.log(rangeBetwee(4, 7));
console.log(rangeBetwee(-4, 7));
// [ 4, 5, 6, 7 ]
// [
//   -4, -3, -2, -1, 0,
//    1,  2,  3,  4, 5,
//    6,  7
// ]
