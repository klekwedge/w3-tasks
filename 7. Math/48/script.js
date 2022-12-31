"use strict";
// Write a JavaScript function to calculate the falling factorial of a number.
// Let x be a real number (but usually an integer).
// Let k be a positive integer.
// Then x to the (power of) k falling is :
// kth falling factorial power of x
// This is called the kth falling factorial power of x.
function fallingFactorial(num, k) {
    let res = 1;
    for (let i = 0; i <= k - 1; i++) {
        res *= num - i;
    }
    return res;
}
console.log(fallingFactorial(10, 2));
// 90
