"use strict";
// Write a JavaScript conditional statement to find the sign of
// product of three numbers. Display an alert box with the specified sign.
function sign(x, y, z) {
    if (x > 0 && y > 0 && z > 0) {
        return "The sign is +";
    }
    else if (x < 0 && y < 0 && z < 0) {
        return "The sign is -";
    }
    else if (x > 0 && y < 0 && z < 0) {
        return "The sign is +";
    }
    else if (x < 0 && y > 0 && z < 0) {
        return "The sign is +";
    }
    else {
        return "The sign is -";
    }
}
console.log(sign(30, 40, -10));
console.log(sign(30, -10, -20));
console.log(sign(-54, -21, -10));
// The sign is -
// The sign is +
// The sign is -
