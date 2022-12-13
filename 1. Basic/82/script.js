"use strict";
// Write a JavaScript code to divide a given array
// of positive integers into two parts. First element
// goes to first part, second element goes to second
// part, and third element goes to first part and soon.
// Now compute the sum of two parts and store into an array of size two
function divideGivenArray(arr) {
    const arr1 = [];
    const arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        i % 2 === 0 ? arr1.push(arr[i]) : arr2.push(arr[i]);
    }
    return [
        arr1.reduce((prev, next) => prev + next),
        arr2.reduce((prev, next) => prev + next),
    ];
}
console.log(divideGivenArray([1, 5, 1, 10]));
console.log(divideGivenArray([13, 365, 6, 212, 5, 10]));
console.log(divideGivenArray([1, 53, 6, 23, 5, 10]));
console.log(divideGivenArray([1, 34, 6, 2, 52, 10]));
console.log(divideGivenArray([51, 31, 65, 2, 5, 160]));
// [ 2, 15 ]
// [ 24, 587 ]
// [ 12, 86 ]
// [ 59, 46 ]
// [ 121, 193 ]
