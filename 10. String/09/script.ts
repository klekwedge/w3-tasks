// Write a JavaScript function to capitalize the first letter of each word in a string.
// Test Data :
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"

function capitalizeWords(str: string) {
  return str
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
}

console.log(capitalizeWords("js string exercises"));

// Js String Exercises
