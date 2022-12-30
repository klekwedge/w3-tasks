"use strict";
// Write a JavaScript function to check whether a string is blank or not.
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]
function stringToArray(str) {
    return str.trim().split(" ");
}
console.log(stringToArray("Robin Singh"));
// [ 'Robin', 'Singh' ]
