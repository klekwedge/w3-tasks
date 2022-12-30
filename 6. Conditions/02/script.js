"use strict";
// Write a JavaScript conditional statement to find the sign of
// product of three numbers. Display an alert box with the specified sign.
function sign(a, b, c) {
    const product = a * b * c;
    return product < 0 ? "-" : "+";
}
console.log(sign(30, 40, -10));
console.log(sign(30, -10, -20));
console.log(sign(-54, -21, -10));
// -
// +
// -
