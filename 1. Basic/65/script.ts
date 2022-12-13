// Write a JavaScript program to create a new string using the first
// and last n characters from a given sting. The string length must
// be greater or equal to n.

function testString(str: string, n: number = 2): string {
  if (str.length < n) {
    return str;
  }
  const newStr = str.slice(0, n) + str.slice(-n);

  return newStr;
}

console.log(testString("P12$$21!P"));
console.log(testString("Newt"));
console.log(testString("FF"));
console.log(testString("P!PPP!P"));
console.log(testString("P21121FcFF"));

// P1!P
// Newt
// FFFF
// P!!P
// P2FF