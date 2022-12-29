"use strict";
// Write a JavaScript program to find the number of even digits in a given integer.
function evenDigits(num) {
    return String(num)
        .split("")
        .filter((item) => +item % 2 === 0).length;
}
console.log(evenDigits(123));
console.log(evenDigits(1020));
console.log(evenDigits(102));
// 1
// 3
// 2
