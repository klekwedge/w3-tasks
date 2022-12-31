// Write a JavaScript function to calculate the combination of n and r.
// The formula is : n!/(r!*(n - r)!).
// Test Data :
// console.log(combinations(6, 2));
// 15
// console.log(combinations(5, 3));
// 10

function fact(num: number) {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }
  return res;
}

function combinations(n: number, k: number) {
  return fact(n) / (fact(k) * fact(n - k));
}

console.log(combinations(6, 2));
console.log(combinations(5, 3));

// 15
// 10
