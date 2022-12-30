"use strict";
// Write a JavaScript function check if a string ends with specified suffix.
// Test Data :
// console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
// true
// console.log(string_endsWith('JS PHP PYTHON',''));
// false
function stringEndsWith(str, suffix) {
    const suffixIndex = str.indexOf(suffix);
    if (suffixIndex === -1) {
        return str;
    }
    if (suffixIndex + suffix.length === str.length) {
        return true;
    }
    return false;
}
console.log(stringEndsWith("JS PHP PYTHON", "PYTHON"));
console.log(stringEndsWith("JS PHP PYTHON", ""));
// true
// false
