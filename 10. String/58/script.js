"use strict";
// Write a JavaScript program to find the most frequent character in a
// given string.
// Test Data :
// ("Madam") -> "a"
// ("civic") -> "c"
// ("HellloL223LLL") -> "L"
// (12321) -> "It must be a string.
function test(str) {
    const obj = {};
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]]++;
        }
        else {
            obj[str[i]] = 1;
        }
    }
    let res = ['', 0];
    Object.entries(obj).forEach((item) => {
        if (item[1] > res[1]) {
            res[1] = item[1];
            res[0] = item[0];
        }
    });
    return res[0];
}
console.log(test("Madam"));
console.log(test("civic"));
console.log(test("HellloL223LLL"));
// a
// c
// L
