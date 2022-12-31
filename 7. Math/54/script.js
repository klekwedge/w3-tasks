"use strict";
// Write a JavaScript program to check if a given number is a power of 10.
function isPowerOfTen(num) {
    const buff = num;
    if (num === 1 || num === 10) {
        return true;
    }
    let count = 1;
    while (num % 10 === 0) {
        count *= 10;
        num /= 10;
    }
    return count === buff;
}
console.log(isPowerOfTen(1));
console.log(isPowerOfTen(10));
console.log(isPowerOfTen(30));
console.log(isPowerOfTen(100));
console.log(isPowerOfTen(90));
console.log(isPowerOfTen(1000));
// true
// true
// false
// true
// false
// true
