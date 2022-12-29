"use strict";
// Write a JavaScript program to find whether the members of a given
// array of integers is a permutation of numbers from 1 to a given integer.
function isPermutation(arr, num) {
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
        if (count > num) {
            break;
        }
        const element = arr[i];
        if (count !== element) {
            return false;
        }
        count++;
    }
    return true;
}
console.log(isPermutation([1, 2, 3, 4, 5], 5));
console.log(isPermutation([1, 2, 3, 5], 5));
console.log(isPermutation([1, 2, 3], 3));
// true
// false
// true
