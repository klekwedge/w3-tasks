// Write a JavaScript program to create a new string without
// the first and last character of a given string.

function createNewString(str: string): string {
  return str.slice(1, str.length - 1);
}

console.log(createNewString('gfcnngndmm'));
console.log(createNewString('adc2'));
console.log(createNewString('ffft'));
console.log(createNewString('op6opo'));
console.log(createNewString('test'));

// fcnngndm
// dc
// ff
// p6op
// es