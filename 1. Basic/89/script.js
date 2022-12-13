"use strict";
// Write a JavaScript program to find the maximal difference
// between any two adjacent elements of a given array of integers.
function maxDifference(arr) {
    const differences = [];
    for (let i = 0; i < arr.length - 1; i++) {
        differences.push(Math.abs(arr[i] - arr[i + 1]));
    }
    return Math.max(...differences);
}
console.log(maxDifference([1, 2, 3, 8, 9]));
console.log(maxDifference([1, 2, 3, 18, 9]));
console.log(maxDifference([13, 2, 3, 8, 9]));
console.log(maxDifference([100, 25, 4.0]));
console.log(maxDifference([100, 25, 25]));
// 5
// 15
// 11
// 75
// 75
