// Write a JavaScript program to compute the sum of the two
// given integers. If the two values are same, then returns triple their sum.

function getSum(a: number, b: number): number {
  if (a === b) {
    return (a + b) * 3;
  }
  return a + b;
}

console.log(getSum(11, 11));
console.log(getSum(5, 11));
// 66
// 16
