"use strict";
// Write a JavaScript function to subtract elements from one another in an array.
function subtraction(arr) {
    return arr.reduce((prev, next) => prev - next);
}
console.log(subtraction([7, 3, 2, -1]));
// 3
