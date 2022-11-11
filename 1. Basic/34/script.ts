// Write a JavaScript program to create new string with
// first 3 characters are in lower case from a given string.
// If the string length is less than 3 convert all the characters
// in upper case.

function createNewString(str: string): string {
  if(str.length < 3){
    return str.toUpperCase();
  }

  return str.slice(0, 3).toLowerCase() + str.slice(3)
}

console.log(createNewString('Hello'));
console.log(createNewString('HELLLLOO'));
console.log(createNewString('he'));
console.log(createNewString('Wo'));
console.log(createNewString('WORLD'));

// hello
// helLLLOO
// HE
// WO
// worLD
