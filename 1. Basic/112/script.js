"use strict";
// Write a JavaScript program to find the number of trailing zeros
// in the decimal representation of the factorial of a given number
function findZeros(num) {
    let fact = 1;
    let res = 0;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    while (Number.isInteger(fact / 10)) {
        fact /= 10;
        res++;
    }
    return res;
}
console.log(findZeros(8));
console.log(findZeros(9));
console.log(findZeros(10));
// 1
// 1
// 2
