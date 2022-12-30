"use strict";
// Write a JavaScript function to reverse words in a given string.
// Test Data :
// ("abc") -> "cba"
// ("JavaScript Exercises") -> "tpircSavaJ sesicrexE"
function test(str) {
    return str
        .split(" ")
        .map((item) => item.split("").reverse().join(''))
        .join(" ");
}
console.log(test("abc"));
console.log(test("JavaScript Exercises"));
// cba
// tpircSavaJ sesicrexE
