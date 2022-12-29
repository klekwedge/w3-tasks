// Write a JavaScript program to swap the first
// and last elements of a given array of integers.
// The array length should be at least 1.

function swapElements(arr: number[]): number[] {
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arr;
}

console.log(swapElements([30, 30, 16, 6]));
console.log(swapElements([16, 6, 30, 6]));
console.log(swapElements([40, 16, 6, 41]));
console.log(swapElements([16, 6, 30, 40]));
console.log(swapElements([6, 40, 40, 1]));

// [ 6, 30, 16, 30 ]
// [ 6, 6, 30, 16 ]
// [ 41, 16, 6, 40 ]
// [ 40, 6, 30, 16 ]
// [ 1, 40, 40, 6 ]
