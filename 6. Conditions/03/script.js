"use strict";
// Write a JavaScript conditional statement to sort three numbers.
// Display an alert box to show the result.
function sort(x, y, z) {
    if (x >= y && x >= z) {
        if (y >= z) {
            return [x, y, z];
        }
        else {
            return [x, z, y];
        }
    }
    else if (y >= x && y >= z) {
        if (x >= z) {
            return [y, x, z];
        }
        else {
            return [y, z, x];
        }
    }
    else if (z >= x && z >= y) {
        if (x >= y) {
            return [z, x, y];
        }
        else {
            return [z, y, x];
        }
    }
}
console.log(sort(30, 40, -10));
console.log(sort(30, -10, -20));
console.log(sort(-54, -21, -10));
// [ 40, 30, -10 ]
// [ 30, -10, -20 ]
// [ -10, -21, -54 ]
