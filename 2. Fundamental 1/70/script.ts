// Write a JavaScript program to cast the provided value as an array if it's not one.

const countOccurrences = (arr: number[], num: number) =>
  arr.filter((item) => item === num).length;

console.log(countOccurrences([1, 1, 2, 1, 2, 3], 1));
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 2));
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 3));

// 3
// 2
// 1
