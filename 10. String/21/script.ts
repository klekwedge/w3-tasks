// Write a JavaScript function to repeat a string a specified times.
// Test Data :
// console.log(repeat_string('a', 4));
// console.log(repeat_string('a'));
// Output :
// "aaaa"
// "Error in string or count."

function repeatString(str: string, count?: number) {
  if (!count) {
    return "Error in string or count.";
  }

  if (str === null || count < 0 || count === Infinity || count === null) {
    return "Error in string or count.";
  }

  if (count) {
    count = count | 0;
    return new Array(count + 1).join(str);
  }

  return null;
}

console.log(repeatString("a", 4));
console.log(repeatString("a"));
console.log(repeatString("a", -2));
console.log(repeatString("a", Infinity));

// aaaa
// Error in string or count.
// Error in string or count.
// Error in string or count.
