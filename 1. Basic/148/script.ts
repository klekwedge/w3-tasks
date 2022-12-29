// Write a JavaScript program to swap two halves
// of a given array of integers of even length.

function halvArraySwap(arr: number[]) {
  if (arr.length % 2 === 1) {
    return false;
  }
  return [...arr.slice(arr.length / 2), ...arr.slice(0, arr.length / 2)];
}

console.log(halvArraySwap([1, 2, 3, 4, 5, 6]));
console.log(halvArraySwap([1, 2, 3, 4, 5, 6, 7]));
console.log(halvArraySwap([1, 5, 6, 2, 3, 4, 5, 6, 5, 7]));

// [ 4, 5, 6, 1, 2, 3 ]

// false

// [
//   4, 5, 6, 5, 7,
//   1, 5, 6, 2, 3
// ]
