// Write a JavaScript function to calculate the nth root of a number.
// Test Data :
// console.log(nthroot(64, 2));
// 8
// console.log(nthroot(64, -2));
// 0.125

function nthRoot(num: number, degree: number) {
  return num ** (1 / degree);
}

console.log(nthRoot(64, 2));
console.log(nthRoot(64, -2));

// 8
// 0.125
