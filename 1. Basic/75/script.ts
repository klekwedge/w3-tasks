// Write a JavaScript program to test whether an array
// of integers of length 2 does not contain 1 or a 3.

function isArrNotContain(arr: number[]): boolean {
  if (arr.length < 1) {
    return false;
  }
  return !(arr.includes(1)) && !(arr.includes(3));
}

console.log(isArrNotContain([1, 5, 6]));
console.log(isArrNotContain([16, 6, 2]));
console.log(isArrNotContain([4, 0, 5]));
console.log(isArrNotContain([0, 2, 3]));
console.log(isArrNotContain([6, 1, 6]));

// false
// true
// true
// false
// false
