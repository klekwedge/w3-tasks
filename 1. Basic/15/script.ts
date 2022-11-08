// Write a JavaScript program to check two given numbers
// and return true if one of the number is 50 or if their sum is 50.

function checkNums(a: number, b: number): boolean {
  return a === 50 || b === 50 || a + b === 50;
}

console.log(checkNums(11, 2));
console.log(checkNums(50, 2));
console.log(checkNums(25, 25));
console.log(checkNums(3, 50));

// false
// true
// true
// true