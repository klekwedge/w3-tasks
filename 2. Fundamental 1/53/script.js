"use strict";
// Write a JavaScript program to Initialize a two dimension
// array of given width and height and value.
const initialize2DArray = (width, height, value) => Array.from({ length: width }, () => Array.from({ length: height }, () => value));
console.log(initialize2DArray(2, 2, 0));
console.log(initialize2DArray(3, 3, 3));
// [ [ 0, 0 ], [ 0, 0 ] ]
// [ [ 3, 3, 3 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ]
