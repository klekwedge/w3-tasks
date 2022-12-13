// Write a JavaScript program to compute the sum of three
// elements of a given array of integers of length 3

function calcSum(arr: number[]): number {
  return arr.reduce((prev, next) => prev + next);
}

console.log(calcSum([1, 5, 6]));
console.log(calcSum([16, 1, 1]));
console.log(calcSum([0, 0, 0]));
console.log(calcSum([0, 2, 3]));
console.log(calcSum([6, 1, 6]));

// 12
// 18
// 0
// 5
// 13
