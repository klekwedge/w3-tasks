"use strict";
// Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true
function isArray(value) {
    return Array.isArray(value);
}
console.log(isArray("w3resource"));
console.log(isArray([1, 2, 4, 0]));
// false
// true
