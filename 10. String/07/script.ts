// Write a JavaScript function to parameterize a string.
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"

function stringParameterize(str: string) {
  str = str.toLowerCase().replace(".", "");

  return str.split(" ").join("-");
}

console.log(stringParameterize("Robin Singh from USA."));

// robin-singh-from-usa
