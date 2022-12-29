// Write a JavaScript program to count the number of vowels
// in a given string.

function convertLetters(str: string): number {
  let counter = 0;
  str.replace(/[aeiou]/gi, (letter) => {
    counter++;
    return letter;
  });
  return counter;
}

console.log(convertLetters('af21b'));
console.log(convertLetters('fkvlclagaaacmcx'));
console.log(convertLetters('vrlea---blwkrkwca---bmdmwcdw'));
console.log(convertLetters('fkelwcafffbfvmevrm'));
console.log(convertLetters('gkldlcmfkrd'));

// 1
// 4
// 3
// 3
// 0
