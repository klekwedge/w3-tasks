// Write a JavaScript program to check whether there is at least
// one element which occurs in two given sorted arrays of integers.

function checkArrays(arr1: number[], arr2: number[]): boolean {
  for (let i = 0; i < arr1.length; i++) {
    const elem = arr1[i];
    if (arr2.find((i) => i === elem)) {
      return true;
    }
  }

  return false;
}

console.log(checkArrays([1, 2, 3, 4, 5, 6, 7, 8], [8, 9, 10]));
console.log(checkArrays([1, 4, 5, 6, 7, 8], [11, 12]));
console.log(checkArrays([1, 6, 7, 8], [1, 8]));
console.log(checkArrays([1, 2, 3, 4], [4, 5, 6]));
console.log(checkArrays([4, 5, 6, 7, 8], [11, 22, 44]));

// true
// false
// true
// true
// false
