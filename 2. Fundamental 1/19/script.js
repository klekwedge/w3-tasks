"use strict";
// Write a JavaScript program to remove specified elements
// from the right of a given array of elements.
const removeFromRight = (arr, pos = -1) => {
    return arr.slice(pos);
};
console.log(removeFromRight([1, 2, 3]));
console.log(removeFromRight([1, 2, 3], -1));
console.log(removeFromRight([1, 2, 3], -2));
console.log(removeFromRight([1, 2, 3], -4));
// [ 3 ]
// [ 3 ]
// [ 2, 3 ]
// [ 1, 2, 3 ]
