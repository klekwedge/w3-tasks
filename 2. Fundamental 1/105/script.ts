// Write a JavaScript program that return true if the given value
// is a number, false otherwise.

const validateNumber = (str: string) =>
  !Number.isNaN(parseFloat(str)) &&
  Number.isFinite(parseFloat(str)) &&
  Number(str) === parseFloat(str);

console.log(validateNumber("200"));
console.log(validateNumber("10"));
console.log(validateNumber("abc"));
console.log(validateNumber("2a1bc"));

// true
// true
// false
// false
