// Write a JavaScript function to test whether a string starts with a specified string.
// Test Data :
// console.log(startsWith('js string exercises', 'js'));
// true

function startsWith(str: string, spec: string) {
  return str.indexOf(spec) === 0;
}

console.log(startsWith('js string exercises', 'js'));

// true
