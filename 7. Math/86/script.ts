// Write a JavaScript program to get the middle character(s) from a
// given string.
// Test Data:
// ("abcd") -> "bc"
// ("abc") -> "b"
// ("JavaScript") -> "Sc"

function test(str: string) {
  if (str.length % 2 === 0) {
    return str.slice(
      Math.floor(str.length / 2 - 1),
      Math.floor(str.length / 2 + 1)
    );
  } else {
    return str.slice(
      Math.floor(str.length / 2),
      Math.floor(str.length / 2 + 1)
    );
  }
}

let text = "abcd";
console.log(test(text));

text = "abc";
console.log(test(text));

text = "JavaScript";
console.log(test(text));

// bc
// b
// Sc
