"use strict";
// Write a JavaScript function to convert radians to degrees.
// Test Data :
// console.log(radians_to_degrees(0.7853981633974483));
// 45
function radiansToDegrees(num) {
    return (num * 180) / Math.PI;
}
console.log(radiansToDegrees(0.7853981633974483));
// 45
