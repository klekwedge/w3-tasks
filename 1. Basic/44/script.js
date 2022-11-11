"use strict";
// Write a JavaScript program to check whether a given number
// is presents in the range 40..10000.
// For example 40 presents in 40 and 4000
function checkNum(a) {
    return a >= 40 && a <= 10000;
}
console.log(checkNum(15));
console.log(checkNum(11));
console.log(checkNum(5000));
console.log(checkNum(65));
console.log(checkNum(1111111111));
// false
// false
// true
// true
// false
