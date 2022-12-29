// Write a JavaScript program to compute the sum of absolute
// differences of consecutive numbers of a given array of integers.

function computeSumAbsoluteDifferences(arr: number[]): number {
  let res = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    res += Math.abs(arr[i] - arr[i + 1]);
  }
  return res;
}

console.log(computeSumAbsoluteDifferences([1, 2, 3, 2, 1, 2, 3, 3, 3, 2]));
console.log(computeSumAbsoluteDifferences([1, 18, 2, 3, 18, 9, 1, 18, 4, 5]));
console.log(computeSumAbsoluteDifferences([13, 2, 3, 13, 13, 8, 9]));
console.log(computeSumAbsoluteDifferences([1, 2, 3, 2, -5]));
console.log(computeSumAbsoluteDifferences([100, 25, 25, 100]));

// 7
// 98
// 28
// 10
// 150