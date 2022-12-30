"use strict";
// Write a JavaScript function to Uncapitalize? the first character of a string.
// Test Data :
// console.log(Uncapitalize('Js string exercises'));
// "js string exercises
function uncapitalize(str) {
    return str[0].toLowerCase() + str.slice(1);
}
console.log(uncapitalize('Js string exercises'));
// js string exercises
