// Write a JavaScript program to reverse the
// elements of a given array of integers length 3.

function reverseElements(arr: number[]): number[] {
  if (arr.length < 1) {
    return [];
  }
  return [arr[2], arr[1], arr[0]];
}

console.log(reverseElements([1, 5, 6]));
console.log(reverseElements([16, 1, 3]));
console.log(reverseElements([1, 0, 1]));
console.log(reverseElements([0, 2, 3]));
console.log(reverseElements([6, 1, 6]));

// [ 6, 5, 1 ]
// [ 3, 1, 16 ]
// [ 1, 0, 1 ]
// [ 3, 2, 0 ]
// [ 6, 1, 6 ]
