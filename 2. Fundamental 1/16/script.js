"use strict";
// Write a JavaScript program to remove specified elements
// from the left of a given array of elements.
const removeFromLeft = (arr, pos = 1) => {
    return arr.slice(pos);
};
console.log(removeFromLeft([1, 2, 3]));
console.log(removeFromLeft([1, 2, 3], 1));
console.log(removeFromLeft([1, 2, 3], 2));
console.log(removeFromLeft([1, 2, 3], 4));
// [ 2, 3 ]
// [ 2, 3 ]
// [ 3 ]
// []
