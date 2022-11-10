"use strict";
// Write a JavaScript program to find a value which is nearest
// to 100 from two different given integer values.
function findNearestValue(a, b) {
    return Math.abs(100 - a) > Math.abs(100 - b) ? b : a;
}
console.log(findNearestValue(1, 6));
console.log(findNearestValue(5341, 22));
console.log(findNearestValue(1, 1));
console.log(findNearestValue(100, 99));
// 7
// 5341
// 1
