"use strict";
// Write a JavaScript function to round a number to a given decimal places.
// Test Data :
// console.log(precise_round(12.375,2));
// console.log(precise_round(-10.3079499, 3));
// console.log(precise_round(10.49999,0));
// console.log(precise_round(10.49999,2));
// Output :
// 12.38
// -10.308
// 10
// 10.50
function preciseRound(num, place) {
    return num.toFixed(place);
}
console.log(preciseRound(12.375, 2));
console.log(preciseRound(-10.3079499, 3));
console.log(preciseRound(10.49999, 0));
console.log(preciseRound(10.49999, 2));
// 12.38
// -10.308
// 10
// 10.50
