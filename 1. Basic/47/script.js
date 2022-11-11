"use strict";
//  Write a JavaScript program to capitalize the first letter of each
// word of a given string.
function capitalizeFirstLetter(str) {
    const arr = str.split(' ');
    return arr.map((item) => item[0].toUpperCase() + item.slice(1)).join(' ');
}
console.log(capitalizeFirstLetter('hello world'));
console.log(capitalizeFirstLetter('goodbye nice test example'));
console.log(capitalizeFirstLetter('str str str'));
console.log(capitalizeFirstLetter('LOOK'));
console.log(capitalizeFirstLetter('test example test'));
// Hello World
// Goodbye Nice Test Example
// Str Str Str
// LOOK
// Test Example Test
