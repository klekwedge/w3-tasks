// Write a JavaScript program to check from two given integers,
// whether one is positive and another one is negative

function checkNums(a: number, b: number): boolean {
  return (a >= 0 && b < 0) || (a < 0 && b >= 0);
}

console.log(checkNums(-20, 1));
console.log(checkNums(-1, 20));
console.log(checkNums(-1, -2));
console.log(checkNums(0, 0));

// true
// true
// false
// false