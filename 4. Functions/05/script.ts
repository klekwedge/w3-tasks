// Write a JavaScript function that accepts a string as a parameter and converts
// the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

function uppercase(str: string) {
  return str
    .split(" ")
    .map((item) => (item = item[0].toUpperCase() + item.slice(1)))
    .join(" ");
}

console.log(uppercase("the quick brown fox"));

// The Quick Brown Fox
