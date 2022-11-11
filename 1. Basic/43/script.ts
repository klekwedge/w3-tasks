// Write a JavaScript program to check two given non-negative integers
// that whether one of the number (not both) is multiple of 7 or 11.

function checkNums(a: number, b: number): boolean {
  return (
    ((a % 7 === 0 || a % 11 === 0) && !(b % 7 === 0 || b % 11 === 0)) ||
    (!(a % 7 === 0 || a % 11 === 0) && (b % 7 === 0 || b % 11 === 0))
  );
}

console.log(checkNums(15, 10));
console.log(checkNums(11, 11));
console.log(checkNums(7, 15));
console.log(checkNums(11, 65));
console.log(checkNums(24, 11));

// false
// false
// true
// true
// true
