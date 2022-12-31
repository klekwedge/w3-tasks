"use strict";
// Write a JavaScript function to generate a random integer.
// Test Data :
// console.log(rand(20,1));
// console.log(rand(1,10));
// console.log(rand(6));
// console.log(rand());
// 15
// 5
// 1
// 0
function rand(min, max = 0) {
    if (min === undefined || max === undefined) {
        return 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
}
console.log(rand(20, 1));
console.log(rand(1, 10));
console.log(rand(6));
console.log(rand());
// 19
// 2
// 2
// 0
