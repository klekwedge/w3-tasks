"use strict";
// Write a JavaScript program to find the number of even values in sequence
// before the first occurrence of a given number.
function checkNumber(a, b, c) {
    if (a === b) {
        return c;
    }
    if (a === c) {
        return b;
    }
    if (b === c) {
        return a;
    }
    return null;
}
console.log(checkNumber(1, 2, 2));
console.log(checkNumber(1, 1, 2));
console.log(checkNumber(1, 2, 3));
// 1
// 2
// null
