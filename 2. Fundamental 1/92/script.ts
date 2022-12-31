// Write a JavaScript program to create a function that gets
// the argument at index n. If n is negative, the nth argument
// from the end is returned.

const nthArg = (arr: number[], pos: number) =>
  pos > 0 ? arr[pos] : arr[arr.length - 1];

console.log(nthArg([1, 2, 3], 2));
console.log(nthArg([1, 2], 2));
console.log(nthArg([1, 2, 3, 4, 5], -1));

// 3
// undefined
// 5
