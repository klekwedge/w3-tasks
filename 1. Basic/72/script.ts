// Write a JavaScript program to create a new array taking the
// middle elements of the two arrays of integer and each length 3.

function createNewArray(arr1: number[], arr2: number[]): number[] {
  return [arr1[Math.floor(arr1.length / 2)], arr2[Math.floor(arr2.length / 2)]];
}

console.log(createNewArray([1, 5, 6], [1, 0, 6]));
console.log(createNewArray([16, 1, 3], [1, 95, 6]));
console.log(createNewArray([1, 0, 1], [1, 7, 6]));
console.log(createNewArray([0, 2, 3], [1, 4, 6]));
console.log(createNewArray([6, 1, 6], [1, 2, 6]));

// [ 5, 0 ]
// [ 1, 95 ]
// [ 0, 7 ]
// [ 2, 4 ]
// [ 1, 2 ]
