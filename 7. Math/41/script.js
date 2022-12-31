"use strict";
// Write a JavaScript function to count the digits of an integer.
function digitsCount(num) {
    return !isNaN(num) && num !== Infinity && String(num).length;
}
console.log(digitsCount(12112));
console.log(digitsCount(457));
// 5
// 3
