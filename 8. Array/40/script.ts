// Write a JavaScript function to generate an array of specified length,
// filled with integer numbers, increase by one from starting position.

// Test Data :
// console.log(array_range(1, 4));
// [1, 2, 3, 4]
// console.log(array_range(-6, 4));
// [-6, -5, -4, -3]

function arrayRange(start: number, length: number) {
  const res = [];

  for (let i = 0; i < length; i++) {
    res.push(start);
    start++;
  }

  return res;
}

console.log(arrayRange(1, 4));
console.log(arrayRange(-6, 4));

// [ 1, 2, 3, 4 ]
// [ -6, -5, -4, -3 ]
