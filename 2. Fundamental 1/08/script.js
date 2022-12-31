"use strict";
// Write a JavaScript program to converts a specified number
// to an array of digits.
function pull(arr, ...elements) {
    return arr.filter((item) => !elements.includes(item));
}
let arra1 = ["a", "b", "c", "a", "b", "c"];
console.log(pull(arra1, "a", "c"));
let arra2 = ["a", "b", "c", "a", "b", "c"];
console.log(pull(arra2, "b"));
// [ 'b', 'b' ]
// [ 'a', 'c', 'a', 'c' ]
