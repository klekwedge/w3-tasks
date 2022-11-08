"use strict";
// Write a JavaScript program to get the difference between a
// given number and 13, if the number is greater than 13
// return double the absolute difference.
function getDifference(num) {
    if (num <= 13) {
        return 13 - num;
    }
    return Math.abs(13 - num) * 2;
}
console.log(getDifference(431));
console.log(getDifference(11));
// 836
// 2
