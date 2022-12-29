// Write a JavaScript program to check whether a string "Script"
// presents at 5th (index 4) position in a given string, if "Script"
// presents in the string return the string without "Script" otherwise
// return the original one.

function checkStr(str: string): boolean {
  return str.indexOf('Script') === 4
}

console.log(checkStr('Script'));
console.log(checkStr('21221Script234'));
console.log(checkStr('Sc4531ri1pt'));
console.log(checkStr('JavaScript'));
console.log(checkStr('TypeScript'));
console.log(checkStr('Type2Script'));

// false
// false
// false
// true
// true
// false