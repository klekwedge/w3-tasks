"use strict";
// Write a JavaScript conditional statement to sort three numbers.
// Display an alert box to show the result.
function sort(a, b, c) {
    return [a, b, c].sort((a, b) => b - a);
}
console.log(sort(30, 40, -10));
console.log(sort(30, -10, -20));
console.log(sort(-54, -21, -10));
// [ 40, 30, -10 ]
// [ 30, -10, -20 ]
// [ -10, -21, -54 ]
