// Write a JavaScript program to move last three character to the
// start of a given string. The string length must be greater or equal to three

function createNewString(str: string): string {
  if (str.length < 3) {
    return str;
  }

  return str.slice(-3) + str.slice(0, -3);
}

console.log(createNewString('abcf'));
console.log(createNewString('adc2'));
console.log(createNewString('fetwmcotfft'));
console.log(createNewString('tovntvnrhyrtew'));
console.log(createNewString('test'));

// bcfa
// dc2a
// fftfetwmcot
// tewtovntvnrhyr
// estt
