"use strict";
// Write a JavaScript program to test whether a given
// array of integers contains 30 and 40 twice.
// The array length should be 0, 1, or 2.
function isArrContain(arr) {
    return (arr[0] === 40 && arr[1] === 40) || (arr[0] === 30 && arr[1] === 30);
}
console.log(isArrContain([30, 30]));
console.log(isArrContain([16, 6]));
console.log(isArrContain([40, 40]));
console.log(isArrContain([30, 40]));
console.log(isArrContain([6, 1]));
// true
// false
// true
// false
// false
