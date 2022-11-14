// Write a JavaScript program to concatenate two strings
// and return the result. If the length of the strings are
// not same then remove the characters from the longer string.

function createNewString(a: string, b: string): string {
  return a.length > b.length ? a.slice(0, b.length) + b : a + b.slice(0, a.length);
}

console.log(createNewString("abcff", "adc2c"));
console.log(createNewString("tovntv5nrhyrtew", "adc2c"));
console.log(createNewString("tovntv5nrhyrtew", "fetwmcotfft"));
console.log(createNewString("test5", "tovntv5nrhyrtew"));
console.log(createNewString("t65e4johb453vest5", "test5"));

// abcffadc2c
// tovntadc2c
// tovntv5nrhyfetwmcotfft
// test5tovnt
// t65e4test5