// Write a JavaScript function to merge two arrays and
// removes all duplicates elements.
// Test data :
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]

function mergeArray(a: number[], b: number[]) {
  return [...new Set([...a, ...b])];
}

const array1 = [1, 2, 3];
const array2 = [2, 30, 1];

console.log(mergeArray(array1, array2));

// [ 1, 2, 3, 30 ]
