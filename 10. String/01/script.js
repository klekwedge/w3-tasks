"use strict";
// Write a JavaScript function to check whether an `input` is a string or not.
// Test Data :
// console.log(is_string('w3resource'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false
function isString(input) {
    return typeof input === "string";
}
console.log(isString("w3resource"));
console.log(isString([1, 2, 4, 0]));
// true
// false
