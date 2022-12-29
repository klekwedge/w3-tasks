// Write a JavaScript program to check from three given numbers
// (non negative integers) that two or all of them have the
// same rightmost digit.

function checkNums(a: number, b: number, c: number): boolean {
  return a % 10 === b % 10 || a % 10 === c % 10 || b % 10 === c % 10;
}

console.log(checkNums(22, 22, 31));
console.log(checkNums(24, 22, 31));
console.log(checkNums(10, 15, 31));
console.log(checkNums(24, 24, 24));
console.log(checkNums(7, 4, 4));
console.log(checkNums(12, 4, 1));

// true
// false
// false
// true
// true
// false
