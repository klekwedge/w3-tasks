// Write a JavaScript program to calculate the mean of all digits of a given number.
// What is a Mean?
// In mathematics, the mean represents the simple average of two or more numbers.
// There are several methods available for computing the mean of a set of numbers,
// including the arithmetic mean method, which uses the sum of the numbers in the
// series, and the geometric mean method, which is the average of a set of products.
// Test Data:
// (11) -> 1
// (66) -> 6
// (336) -> 4
// (444) -> 4
// (1151) -> 2

function test(num: number) {
  return (
    String(Math.abs(num))
      .split("")
      .map((item) => +item)
      .reduce((prev, next) => prev + next) / String(Math.abs(num)).length
  );
}

let n = 11;
console.log(test(n));

n = 66;
console.log(test(n));

n = 336;
console.log(test(n));

n = 444;
console.log(test(n));

n = 1151;
console.log(test(n));

// 1
// 6
// 4
// 4
// 2
