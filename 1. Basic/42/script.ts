// Write a JavaScript program to check two given integer values and
// return true if one of the number is 15 or if their sum or difference is 15.

function checkNums(a: number, b: number): boolean {
  return a === 15 || b === 15 || a + b === 15 || Math.abs(a - b) === 15;
}

console.log(checkNums(15, 10));
console.log(checkNums(24, 22));
console.log(checkNums(30, 15));
console.log(checkNums(24, 24));
console.log(checkNums(7, 8));
console.log(checkNums(12, 4));

// true
// false
// true
// false
// true
// false
