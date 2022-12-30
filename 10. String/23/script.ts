// Write a JavaScript function to strip leading and trailing spaces from a string.
// Test Data :
// console.log(strip('w3resource '));
// console.log(strip(' w3resource'));
// console.log(strip(' w3resource '));
// Output :
// "w3resource"
// "w3resource"
// "w3resource"

function strip(str: string) {
  return str.replace(/^\s+|\s+$/g, "");
}

console.log(strip("w3resource "));
console.log(strip(" w3resource"));
console.log(strip(" w3resource  "));

// w3resource
// w3resource
// w3resource
