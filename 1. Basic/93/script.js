"use strict";
// Write a JavaScript program to find the maximal
// difference among all possible pairs of a given array of integers
function maximalDifference(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j !== i && j < arr.length; j++) {
            const difference = Math.abs(arr[i] - arr[j]);
            if (difference > max) {
                max = difference;
            }
        }
    }
    return max;
}
console.log(maximalDifference([1, 2, 3, 8, 9]));
console.log(maximalDifference([1, 2, 3, 18, 9]));
console.log(maximalDifference([13, 2, 3, 8, 9]));
console.log(maximalDifference([100, 25, 4.0]));
console.log(maximalDifference([100, 25, 25]));
// 8
// 17
// 11
// 96
// 75
