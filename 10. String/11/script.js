"use strict";
// Write a JavaScript function to convert a string into camel case.;
// Test Data :
// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScriptExercises"));
// "JavaScriptExercises"
// "JavaScriptExercises"
// "JavaScriptExercises"
function camelize(str) {
    return str
        .split(" ")
        .map((item) => item[0].toUpperCase() + item.slice(1))
        .join("");
}
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
// JavaScriptExercises
// JavaScriptExercises
// JavaScriptExercises
