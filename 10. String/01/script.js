"use strict";
// Write a JavaScript function to check whether an `input` is a string or not.
function isString(input) {
    return typeof input === "string";
}
console.log(isString("w3resource"));
console.log(isString([1, 2, 4, 0]));
// true
// false
