"use strict";
// Write a JavaScript function to limit a value inside a certain range.
// Note : If the value is higher than max it will return max. and if
// the value is smaller than min it will return the min.
// Test Data :
// console.log(value_limit(7, 1, 12));
// 7
// console.log(value_limit(-7, 0, 12));
// 0
// console.log(value_limit(15, 0, 12));
// 12
function valueLimit(val, min, max) {
    return val < min ? min : val > max ? max : val;
}
console.log(valueLimit(7, 1, 12));
console.log(valueLimit(-7, 0, 12));
console.log(valueLimit(15, 0, 12));
// 7
// 0
// 12
