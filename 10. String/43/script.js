"use strict";
// Write a JavaScript function to test whether the character at the provided (character) index is upper case.
// Test Data :
// console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
// false
function isUpperCaseAt(str, index) {
    return str[index].toUpperCase() === str[index];
}
console.log(isUpperCaseAt("Js STRING EXERCISES", 1));
// false
