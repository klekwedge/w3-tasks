"use strict";
// Write a JavaScript program to get the nth element of a given array.
const nthElement = (arr, index) => (index > 0 ? arr.slice(index, index + 1) : arr.slice(index))[0];
console.log(nthElement(["a", "b", "c"], 1));
console.log(nthElement(["a", "b", "b"], -3));
// b
// a
