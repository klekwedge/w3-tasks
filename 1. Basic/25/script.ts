// Write a JavaScript program to check whether a given
// positive number is a multiple of 3 or a multiple of 7.

function checkMultiple(num: number): boolean {
  return num % 3 === 0 || num % 7 === 0;
}

console.log(checkMultiple(3));
console.log(checkMultiple(123));
console.log(checkMultiple(35));
console.log(checkMultiple(1));
console.log(checkMultiple(5));


// true
// true
// true
// false
// false
