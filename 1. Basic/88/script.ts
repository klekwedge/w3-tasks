// Write a JavaScript program to find the maximum possible
// sum of some of its k consecutive numbers (numbers that
// follow each other in order.) of a given array of positive integers.

function maxConsecutiveSum(arr: number[], k: number): number {
  const sums = [];

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    if (i + k > arr.length) {
      break;
    }

    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    sums.push(sum);
  }

  return Math.max(...sums);
}

console.log(maxConsecutiveSum([1, 2, 3, 14, 5], 2));
console.log(maxConsecutiveSum([2, 3, 5, 1, 6], 3));
console.log(maxConsecutiveSum([9, 3, 5, 1, 7], 2));
console.log(maxConsecutiveSum([100, 25, 4.0], 2));
console.log(maxConsecutiveSum([100, 25, 25], 1));

// 19
// 12
// 12
// 125
// 100
