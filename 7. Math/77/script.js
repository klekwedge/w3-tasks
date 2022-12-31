"use strict";
// Write a JavaScript program to given two non-negative integers num1
// and num2 represented as string, return the sum of num1 and num2.
function test(num1, num2) {
    if (isNaN(+num1) || isNaN(+num2)) {
        return null;
    }
    return +num1 + +num2;
}
console.log(test("123", "123"));
console.log(test("45", "100"));
console.log(test("45", "1ff00"));
// 246
// 145
// null
