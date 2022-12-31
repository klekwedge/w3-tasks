// Write a JavaScript program to compute the sum of the main diagonal
// elements of a square matrix. In mathematics, a matrix (plural matrices)
// is a rectangular array or table of numbers, symbols, or expressions,
// arranged in rows and columns, which is used to represent a mathematical
// object or a property of such an object.
// An m x n matrix: the m rows are horizontal and the n columns are vertical
// JavaScript Math: Sum of the main diagonal elements of a square matrix.
// In mathematics, a square matrix is a matrix with the same number of rows and columns. An n-by-n matrix is known as a square matrix of order n. Any two square matrices of the same order can be added and multiplied.
// Test Data:
// ([ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]) -> 15
// ( [ [-1, -2], [-4, -5] ]) -> -6

function test(nums: number[][]) {
  let cols = 0;
  for (let i = 0; i < nums.length; i++) {
    cols++;
  }

  if (cols !== nums.length) {
    return null;
  }

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    const row = nums[i];
    sum += row[i];
  }

  return sum;
}

let nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(test(nums));

nums = [
  [-1, -2],
  [-4, -5],
];
console.log(test(nums));

// 15
// -6
