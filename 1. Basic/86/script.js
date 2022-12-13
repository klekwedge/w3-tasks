"use strict";
// Write a JavaScript program to check whether it is possible to replace
// $ in a given expression x $ y = z with one of the four signs +, -, * or /
// to obtain a correct expression.
// For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z
function isTrueEquality(num1, num2, num3) {
    return (num1 + num2 === num3 ||
        num1 - num2 === num3 ||
        num1 / num2 === num3 ||
        num1 * num2 === num3);
}
console.log(isTrueEquality(10, 25, 35));
console.log(isTrueEquality(10, 25, 250));
console.log(isTrueEquality(30, 25, 5));
console.log(isTrueEquality(100, 25, 4.0));
console.log(isTrueEquality(100, 25, 25));
// true
// true
// true
// true
// false
