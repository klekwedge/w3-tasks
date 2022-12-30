"use strict";
// Write a JavaScript function to create a case-insensitive search.
// Test Data :
// console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
// "Matched"
// console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
// "Matched"
// console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));
// "Not Matched"
function caseInsensitiveSearch(str, search) {
    return str.toLowerCase().includes(search.toLowerCase())
        ? "Matched"
        : "Not Matched";
}
console.log(caseInsensitiveSearch("JavaScript Exercises", "exercises"));
console.log(caseInsensitiveSearch("JavaScript Exercises", "Exercises"));
console.log(caseInsensitiveSearch("JavaScript Exercises", "Exercisess"));
// Matched
// Matched
// Not Matched
