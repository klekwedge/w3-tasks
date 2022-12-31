// Write a JavaScript function to calculate the sum of values in an array.
// Test Data :
// console.log(sum([1,2,3]));
// console.log(sum([100,-200,3]));
// console.log(sum([1,2,'a',3]));
// Output :
// 6
// -97
// 6

function sum(arr: any[]) {
  return arr
    .filter((item) => typeof item === "number")
    .reduce((prev, next) => prev + next);
}

console.log(sum([1, 2, 3]));
console.log(sum([100, -200, 3]));
console.log(sum([1, 2, "a", 3]));

// 6
// -97
// 6
