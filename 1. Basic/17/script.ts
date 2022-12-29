// Write a JavaScript program to compute the sum of the two
// given integers. If the two values are same, then returns triple their sum.

function getDifference(num: number): number {
  if (num <= 19) {
    return 19 - num;
  }

  return Math.abs(19 - num) * 3
}

console.log(getDifference(20));
console.log(getDifference(19));
// 3
// 0
