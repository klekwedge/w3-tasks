// Write a JavaScript function to check whether a string is blank or not.
// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
// true
// false

function isBlank(str: string) {
  return str.length === 0;
}
console.log(isBlank(""));
console.log(isBlank("abc"));

// true
// false
