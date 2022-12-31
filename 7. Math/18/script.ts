// Write a JavaScript function to calculate the product of values in an array.
// Test Data :
// console.log(product([1,2,3]));
// console.log(product([100,-200,3]));
// console.log(product([1,2,'a',3]));
// Output :
// 6
// -60000
// 6

function product(arr: any[]) {
  return arr
    .filter((item) => typeof item === "number")
    .reduce((prev, next) => prev * next);
}

console.log(product([1, 2, 3]));
console.log(product([100, -200, 3]));
console.log(product([1, 2, "a", 3]));

// 6
// -60000
// 6
