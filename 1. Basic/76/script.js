"use strict";
// Write a JavaScript program to create a new array taking
// the first and last elements from a given array of
// integers and length must be greater or equal to 1.
function createNewArray(arr) {
    if (arr.length < 1) {
        return [];
    }
    return [arr[0], arr[arr.length - 1]];
}
console.log(createNewArray([1, 5, 6]));
console.log(createNewArray([16, 1, 3]));
console.log(createNewArray([1, 0, 1]));
console.log(createNewArray([0, 2, 3]));
console.log(createNewArray([6, 1, 6]));
// [ 1, 6 ]
// [ 16, 3 ]
// [ 1, 1 ]
// [ 0, 3 ]
// [ 6, 6 ]
