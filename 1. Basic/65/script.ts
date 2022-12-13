// Write a JavaScript program to create a new string using the first
// and last n characters from a given sting. The string length must
// be greater or equal to n.

function testString(str: string, n: number = 5): string {
  const newStr = str[0] +  str[str.length - 1];

  return newStr.repeat(n);
}

console.log(testString("P12$$21!P"));
console.log(testString("Newt"));
console.log(testString("FF"));
console.log(testString("P!PPP!P"));
console.log(testString("P21121FcFF"));

// PPPPPPPPPP
// NtNtNtNtNt
// FFFFFFFFFF
// PPPPPPPPPP
// PFPFPFPFPF
