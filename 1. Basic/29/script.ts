// Write a JavaScript program to check whether three given
// integer values are in the range 50..99 (inclusive).
// Return true if one or more of them are in the said range.

function isNumbersInRange(a: number, b: number, c: number): boolean {
  return (a >= 50 && a <= 99) || (b >= 50 && b <= 99) || (c >= 50 && c <= 99);
}

console.log(isNumbersInRange(55, 111, 1));
console.log(isNumbersInRange(5312, 65, 55));
console.log(isNumbersInRange(55, 55, 21214));
console.log(isNumbersInRange(76, 99, 6543));
console.log(isNumbersInRange(100, 2121, 222));

// true
// true
// true
// true
// false
