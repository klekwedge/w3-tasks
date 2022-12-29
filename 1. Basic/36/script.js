"use strict";
// Write a JavaScript program to check whether the last digit
// of the three given positive integers is same.
function checkLastDigit(a, b, c) {
    return a % 10 == b % 10 && a % 10 == c % 10 && b % 10 == c % 10;
}
console.log(checkLastDigit(123, 123, 3));
console.log(checkLastDigit(123, 121, 1));
console.log(checkLastDigit(2123, 123, 3));
console.log(checkLastDigit(22, 22, 444424122));
console.log(checkLastDigit(5213422, 422, 654357652));
// true
// false
// true
// true
// true
