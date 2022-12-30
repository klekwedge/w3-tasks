"use strict";
// Write a JavaScript function to convert a string to title case.
// Test Data :
// console.log(sentenceCase('PHP exercises. python exercises.'));
// "Php Exercises. Python Exercises."
function sentenceCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map((item) => item[0].toUpperCase() + item.slice(1))
        .join(" ");
}
console.log(sentenceCase("PHP exercises. python exercises."));
// Php Exercises. Python Exercises.
