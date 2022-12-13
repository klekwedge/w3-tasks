// Write a JavaScript program to rotate the elements
// left of a given array of integers of length 3

function calcSum(arr: number[]): number[] {
  return [arr[1], arr[2], arr[0]];
}

console.log(calcSum([1, 5, 6]));
console.log(calcSum([16, 1, 1]));
console.log(calcSum([0, 0, 0]));
console.log(calcSum([0, 2, 3]));
console.log(calcSum([6, 1, 6]));

// [ 5, 6, 1 ]
// [ 1, 1, 16 ]
// [ 0, 0, 0 ]
// [ 2, 3, 0 ]
// [ 1, 6, 6 ]
