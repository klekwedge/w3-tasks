"use strict";
// Write a JavaScript function to Uncapitalize the first letter of each word of a string.
// Test Data :
// console.log(unCapitalize_Words('Js String Exercises'));
// "js string exercises
function unCapitalizeWords(str) {
    return str
        .split(" ")
        .map((item) => item[0].toLowerCase() + item.slice(1))
        .join(" ");
}
console.log(unCapitalizeWords("Js String Exercises"));
// js string exercises
