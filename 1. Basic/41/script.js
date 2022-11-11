"use strict";
// Write a JavaScript program to check from three given integers that
// whether a number is greater than or equal to 20 and less than one
// of the others.
function checkNums(a, b, c) {
    if (a > 20 && (a < b || a < c)) {
        return true;
    }
    else if (b > 20 && (b < a || b < c)) {
        return true;
    }
    else if (c > 20 && (c < a || c < b)) {
        return true;
    }
    return false;
}
console.log(checkNums(22, 22, 31));
console.log(checkNums(24, 22, 31));
console.log(checkNums(10, 15, 31));
console.log(checkNums(24, 24, 24));
console.log(checkNums(7, 4, 4));
console.log(checkNums(12, 4, 1));
// true
// true
// false
// false
// false
// false
