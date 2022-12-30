// Write a JavaScript function to test whether a string ends with a specified string.
// Test Data :
// console.log(endsWith('JS string exercises', 'exercises'));
// true

function endsWith(input: string, str: string) {
  const index = input.indexOf(str);
  return index + str.length === input.length
}

console.log(endsWith("JS string exercises", "exercises"));

// true
