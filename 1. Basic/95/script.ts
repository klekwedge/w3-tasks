// Write a JavaScript program to replace all the numbers
// with a specified number of a given array of integers

function replaceSomeElements(
  arr: number[],
  oldEl: number,
  newEl: number
): number[] {
  for (let index = 0; index < arr.length; index++) {
    const el = arr[index];

    if (el === oldEl) {
      arr[index] = newEl;
    }
  }
  return arr;
}

console.log(
  replaceSomeElements([1, 2, 3, 2, 1, 2, 3, 3, 3, 2], 2, 99)
);
console.log(replaceSomeElements([1, 18, 2, 3, 18, 9, 1, 18, 4, 5], 18, 23));
console.log(replaceSomeElements([13, 2, 3, 13, 13, 8, 9], 13, 1111));
console.log(replaceSomeElements([100, 25, 25, 4.0, 25], 25, 999));
console.log(replaceSomeElements([100, 25, 25, 100], 25, 4543));

// [
//   1, 99, 3, 99,  1,
//  99,  3, 3,  3, 99
// ]

// [
//  1, 23,  2, 3, 23,
//  9,  1, 23, 4,  5
// ]

// [
//  1111,    2, 3,
//  1111, 1111, 8,
//     9
// ]

// [ 100, 999, 999, 4, 999 ]

// [ 100, 4543, 4543, 100 ]
