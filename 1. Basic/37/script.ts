// Write a JavaScript program to check from two given
// integers whether one of them is 8 or their sum or
// difference is 8.

function checkNums(a: number, b: number): boolean {
  return a === 8 || b === 8 || a + b === 8 || Math.abs(a - b) === 8;
}

console.log(checkNums(99, 3));
console.log(checkNums(8, 65));
console.log(checkNums(8, 8));
console.log(checkNums(4, 4));
console.log(checkNums(12, 4));
console.log(checkNums(9, 65));

// false
// true
// true
// true
// true
// false
