// Write a JavaScript function that takes a string which has lower and upper case
// letters as a parameter and converts upper case letters to lower case, and lower
// case letters to upper case.
// Test Data :
// console.log(swapcase('AaBbc'));
// "aAbBC"

function swapCase(str: string) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === str[i]) {
      res += str[i].toLowerCase();
    } else {
      res += str[i].toUpperCase();
    }
  }
  return res;
}

console.log(swapCase("AaBbc"));

// aAbBC
