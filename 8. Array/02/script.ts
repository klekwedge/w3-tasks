// Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

function arrayClone(arr: any) {
  return JSON.parse(JSON.stringify(arr));
}

console.log(arrayClone([1, 2, 4, 0]));
console.log(arrayClone([1, 2, [4, 0]]));

// [ 1, 2, 4, 0 ]
// [ 1, 2, [ 4, 0 ] ]
