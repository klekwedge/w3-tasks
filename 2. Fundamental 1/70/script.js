"use strict";
// Write a JavaScript program to count the occurrences of a value in an array.
const countOccurrences = (arr, num) => arr.filter((item) => item === num).length;
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 1));
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 2));
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 3));
// 3
// 2
// 1
