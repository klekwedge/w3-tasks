// Write a JavaScript program to calculate the sum of the
// two highest positive numbers from a given array.
// Test Data:
// ([1,2,6,3,4,5,6,7]) ->13
// ([2,3,4,5]) -> 9

function test(num: number[]) {
  num.sort((a, b) => a - b);
  return num[num.length - 1] + num[num.length - 2];
}

let nums = [1, 2, 6, 3, 4, 5, 6, 7];
console.log(test(nums));

nums = [2, 3, 4, 5];
console.log(test(nums));

// 13
// 9
