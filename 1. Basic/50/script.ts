// Write a JavaScript program to check whether the characters a and
// b are separated by exactly 3 places anywhere (at least once) in a given string.

function convertLetters(str: string): boolean {
  return /a...b/.test(str) || /b...a/.test(str);
}

console.log(convertLetters('af21b'));
console.log(convertLetters('fkvlclaggggggggbrorpdkmcmcx'));
console.log(convertLetters('vrlea---blwkrkwca---bmdmwcdw'));
console.log(convertLetters('fkelwcafffbfvmevrm'));
console.log(convertLetters('gkldlcmfkrd'));

// true
// false
// true
// true
// false
