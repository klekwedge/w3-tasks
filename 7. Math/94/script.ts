// Write a JavaScript program to calculate the sum and count
// of even and odd numbers in an array.
// Test Data:
// ([1,2,3,4,5,6,7]) -> 3,12, 4,16
// ([2,3,5,1,2,0,3,4,2,3,4)] -> 6,14, 5,15

function test(nums: number[]) {
  let evenCounter = 0;
  let evenSum = 0;
  let oddCounter = 0;
  let oddSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      oddCounter++;
      oddSum += nums[i];
    } else {
      evenCounter++;
      evenSum += nums[i];
    }
  }

  return [oddCounter, oddSum, evenCounter, evenSum];
}

let nums = [1, 2, 3, 4, 5, 6, 7];
console.log(test(nums));

nums = [2, 3, 5, 1, 2, 0, 3, 4, 2, 3, 4];
console.log(test(nums));

// [ 3, 12, 4, 16 ]
// [ 6, 14, 5, 15 ]
