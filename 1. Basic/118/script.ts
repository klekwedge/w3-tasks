// Write a JavaScript program to check whether a given number is in a given range.

function isNumberInRange(start: number, num: number, end: number) {
  if (num >= start && num <= end) {
    return false;
  }

  return true;
}

console.log(isNumberInRange(1, 2, 3));
console.log(isNumberInRange(1, 2, -3));
console.log(isNumberInRange(1.1, 1.2, 1.3));

// false
// true
// false
