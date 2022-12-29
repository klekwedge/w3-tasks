"use strict";
// Write a JavaScript program to find the larger number
// from the two given positive integers, the two numbers
// are in the range 40..60 inclusive.
function findLargerNumber(a, b) {
    if (a >= 40 && a <= 60 && b >= 40 && b <= 60) {
        return a > b ? a : b;
    }
    else {
        return null;
    }
}
console.log(findLargerNumber(1, 6));
console.log(findLargerNumber(5341, 22));
console.log(findLargerNumber(1, 1));
console.log(findLargerNumber(100, 99));
console.log(findLargerNumber(44, 55));
// null
// null
// null
// null
// 55
