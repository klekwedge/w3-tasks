// Write a JavaScript program to get a random number in the specified range.

const randomIntArrayInRange = (start: number, end: number, n: number) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (end - start + 1)) + start
  );

console.log(randomIntArrayInRange(1, 20, 10));
console.log(randomIntArrayInRange(-10, 10, 5));

// [
//   2,  7, 15, 20, 14,
//  19, 10, 10, 12,  8
// ]

// [ -10, -5, 1, 10, 1 ]
