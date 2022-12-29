// Write a JavaScript program to find two elements of the array such that their absolute
// difference is not greater than a given integer but is as close to the said integer.

function findTwoElAbsoluteDifference(arr: number[], num: number) {
  let diff = 0;
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (
        i !== j &&
        Math.abs(arr[i] - arr[j]) <= num &&
        Math.abs(arr[i] - arr[j]) > diff
      ) {
        diff = arr[i] - arr[j];
        res[0] = arr[i];
        res[1] = arr[j];
      }
    }
  }
  return res;
}

console.log(findTwoElAbsoluteDifference([1, 2, 3, 8, 9], 3));
console.log(findTwoElAbsoluteDifference([1, 2, 3, 18, 9], 11));
console.log(findTwoElAbsoluteDifference([13, 2, 3, 8, 9], 21));
console.log(findTwoElAbsoluteDifference([100, 25, 40], 42));
console.log(findTwoElAbsoluteDifference([100, 25, 25], 12));

// [ 3, 1 ]
// [ 18, 9 ]
// [ 13, 2 ]
// [ 40, 25 ]
// []
