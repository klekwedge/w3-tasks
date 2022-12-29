"use strict";
// Write a JavaScript program to compute the sum of the two given
// integers, If the sum is in the range 50..80 return 65 other
//wise return 80.
function computeSum(a, b) {
    return a + b >= 50 && a + b <= 80 ? 65 : 80;
}
console.log(computeSum(78, 5));
console.log(computeSum(89, 21));
console.log(computeSum(99, 3));
console.log(computeSum(9, 65));
// 80
// 80
// 80
// 65
