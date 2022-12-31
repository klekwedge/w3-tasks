"use strict";
// Write a JavaScript function which will return values that are powers of two.
// Test Data :
// console.log(isPower_of_two(64));
// true
// console.log(isPower_of_two(94));
// false
function isPowerOfTwo(num) {
    const buff = num;
    if (num === 1 || num === 2) {
        return true;
    }
    let count = 1;
    while (num % 2 === 0) {
        count *= 2;
        num /= 2;
    }
    return count === buff;
}
console.log(isPowerOfTwo(64));
console.log(isPowerOfTwo(94));
// true
// false
