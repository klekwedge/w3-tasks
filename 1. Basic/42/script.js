"use strict";
// Write a JavaScript program to check whether three given numbers
// are increasing in strict mode or in soft mode.  Go to the editor
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31
function checkNums(a, b, c) {
    if (c >= b && b >= a) {
        return 'Strict mode';
    }
    else if (c >= b) {
        return 'Soft mode';
    }
    return null;
}
console.log(checkNums(22, 22, 31));
console.log(checkNums(24, 22, 31));
console.log(checkNums(10, 15, 31));
console.log(checkNums(7, 4, 4));
console.log(checkNums(12, 4, 1));
console.log(checkNums(9, 65, 343));
// Strict mode
// Soft mode
// Strict mode
// Soft mode
// null
// Strict mode
