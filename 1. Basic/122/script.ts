// Write a JavaScript program to check whether a given array of
// integers represents either a strictly increasing or a strictly decreasing sequence.

function isMonotonous(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    if(arr[i + 1] <= arr[i]){
      return false
    }
  }
  return true;
}

console.log(isMonotonous([1, 2, 3]));
console.log(isMonotonous([1, 2, 2]));
console.log(isMonotonous([-3, -2, -1]));

// true
// false
// true
