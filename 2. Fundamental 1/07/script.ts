// Write a JavaScript program to converts a specified number
// to an array of digits.

function digitize(num: number) {
  return String(num)
    .split("")
    .map((item) => +item);
}

console.log(digitize(123));
console.log(digitize(1230));

// [ 1, 2, 3 ]
// [ 1, 2, 3, 0 ]
