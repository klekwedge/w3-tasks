// Write a JavaScript program to check whether
// all elements in a given array are equal or not.

const allEqual = (arr: number[]) => arr.every((item) => item === arr[0]);

console.log(allEqual([1, 2, 3, 4, 5, 6]));
console.log(allEqual([12, 12, 12, 12]));

// false
// true
