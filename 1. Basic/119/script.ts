// Write a JavaScript program to check whether a given integer has an increasing digits sequence.

function isIncreasingDigitsSequence(num: number) {
  const arr = String(num)
    .split("")
    .map((item) => +item);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] <= arr[i]) {
      return false;
    }
  }

  return true;
}

console.log(isIncreasingDigitsSequence(123));
console.log(isIncreasingDigitsSequence(1223));
console.log(isIncreasingDigitsSequence(45677));

// true
// false
// false
