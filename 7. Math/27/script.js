"use strict";
// Write a JavaScript function to round up an integer value to the next multiple of 5.
// Test Data :
// console.log(int_round5(32));
// 35
// console.log(int_round5(137));
// 140
function intRound5(num) {
    return num + 5 - (num % 5);
}
console.log(intRound5(32));
console.log(intRound5(137));
// 35
// 140
