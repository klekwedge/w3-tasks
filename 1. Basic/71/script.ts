// Write a JavaScript program to find the larger value between
// the first or last and set all the other elements with
// that value. Display the new array.

function fillArray(arr: number[]): number[] {
  if (arr.length < 1) {
    return [];
  }
  const max = arr[0] > arr[arr.length - 1] ? arr[0] : arr[arr.length - 1];
  return arr.fill(max);
}

console.log(fillArray([1, 5, 6]));
console.log(fillArray([16, 1, 3]));
console.log(fillArray([1, 0, 1]));
console.log(fillArray([0, 2, 3]));
console.log(fillArray([6, 1, 6]));

// [ 6, 6, 6 ]
// [ 16, 16, 16 ]
// [ 1, 1, 1 ]
// [ 3, 3, 3 ]
// [ 6, 6, 6 ]
