// Write a JavaScript program to check whether the first and last
// elements are equal of a given array of integers length 3.

function compareArrayElements(arr: number[]): boolean {
  if (arr.length < 1) {
    return false;
  }
  return arr[0] === arr[arr.length - 1];
}

console.log(compareArrayElements([1, 5, 6]));
console.log(compareArrayElements([16, 1, 3]));
console.log(compareArrayElements([1, 0, 1]));
console.log(compareArrayElements([0, 2, 3]));
console.log(compareArrayElements([6, 1, 6]));

// false
// false
// true
// false
// true
