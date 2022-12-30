// Write a JavaScript function to get a part of a string after a specified character.
// Test Data :
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
// Output :
// "w3resource"
// "xercises"

function subStrAfterChars(str: string, char: string, pos: string) {
  const charIndex = str.indexOf(char);

  if (charIndex === -1) {
    return str;
  }

  if (pos === "a") {
    return str.slice(0, charIndex);
  } else {
    return str.slice(charIndex + 1);
  }
}

console.log(subStrAfterChars("w3resource: JavaScript Exercises", ":", "a"));
console.log(subStrAfterChars("w3resource: JavaScript Exercises", "E", "b"));

// w3resource
// xercises
