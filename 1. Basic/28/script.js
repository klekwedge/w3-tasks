"use strict";
// Write a JavaScript program to check whether two given
// integer values are in the range 50..99 (inclusive).
// Return true if either of them are in the said range
function isNumbersInRange(a, b) {
    return (a >= 50 && a <= 99) || (b >= 50 && b <= 99);
}
console.log(isNumbersInRange(55, 111));
console.log(isNumbersInRange(5312, 65));
console.log(isNumbersInRange(55, 55));
console.log(isNumbersInRange(76, 99));
console.log(isNumbersInRange(100, 2121));
// true
// true
// true
// true
// false
