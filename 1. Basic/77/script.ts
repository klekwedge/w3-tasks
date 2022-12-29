//  Write a JavaScript program to test whether an array of integers
// of length 2 contains 1 or a 3.

function isArrContain(arr: number[]): boolean {
  if (arr.length < 1) {
    return false;
  }
  return arr.includes(1) || arr.includes(3);
}

console.log(isArrContain([1, 5, 6]));
console.log(isArrContain([16, 6, 2]));
console.log(isArrContain([4, 0, 5]));
console.log(isArrContain([0, 2, 3]));
console.log(isArrContain([6, 1, 6]));

// true
// false
// false
// true
// true
