"use strict";
// Write a JavaScript program to check whether
// two numbers are in range 40..60 or in the range 70..100 inclusive.
function isNumbersInRange(a, b) {
    return ((a >= 40 && a <= 60 && b >= 40 && b <= 60) ||
        (a >= 70 && a <= 100 && b >= 70 && b <= 100));
}
console.log(isNumbersInRange(1, 6));
console.log(isNumbersInRange(5341, 22));
console.log(isNumbersInRange(1, 1));
console.log(isNumbersInRange(100, 99));
// false
// false
// false
// true
