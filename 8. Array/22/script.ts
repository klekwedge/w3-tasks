// Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]

function union(arr1: number[], arr2: number[]) {
  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}

console.log(union([1, 2, 3], [100, 2, 1, 10]));

// [ 1, 2, 3, 10, 100 ]
