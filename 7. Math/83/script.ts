// Write a JavaScript program to find the missing number from a
// given array. There are no duplicates in the list.
// Test Data:
// ([1,2,3,5,6,7]) -> 4
// ([2,3,4,5]) -> 1

function test(num: number[]) {
  for (let i = 0; i < num.length; i++) {
    if (i + 1 !== num[i]) {
      return i + 1;
    }
  }
  return null;
}

let nums = [1, 2, 3, 5, 6, 7];
console.log(test(nums));

nums = [2, 3, 4, 5];
console.log(test(nums));

// 4
// 1
