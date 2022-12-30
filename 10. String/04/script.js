"use strict";
// Write a JavaScript function to check whether a string is blank or not.
function truncateString(str, length) {
    if (typeof str === "string" && length > 0) {
        return str.slice(0, length);
    }
    return null;
}
console.log(truncateString("Robin Singh", 4));
// Robi
