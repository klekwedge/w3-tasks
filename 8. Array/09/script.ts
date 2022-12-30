// Write a JavaScript program which accept a string as input
// and swap the case of each character. For example if you
// input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

const str = "cFCtkjFckChOvM";
let result = "";

for (let i = 0; i < str.length; i++) {
  if (str[i].toUpperCase() === str[i]) {
    result += str[i].toLowerCase();
  } else {
    result += str[i].toUpperCase();
  }
}
console.log(result);

// CfcTKJfCKcHoVm
