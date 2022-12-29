// Write a JavaScript program to remove a character at
// the specified position of a given string and return the new string.

function removeCharacter(str: string, index: number): string {
  return str.slice(0, index) + str.slice(index + 1);
}

console.log(removeCharacter('test', 3));
console.log(removeCharacter('Example', 5));
console.log(removeCharacter('Python', 2));

// tes
// Exampe
// Pyhon
