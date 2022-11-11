"use strict";
// Write a JavaScript program to convert the letters of a given
// string in alphabetical order.
function convertLetters(str) {
    return str.split('').sort().join('');
}
console.log(convertLetters('Fcewvwwqefvw'));
console.log(convertLetters('fkvlclrorpdkmcmcx'));
console.log(convertLetters('vrlelwkrkwcmdmwcdw'));
console.log(convertLetters('fkelwcfvmevrm'));
console.log(convertLetters('gkldlcmfkrd'));
// Fceefqvvwwww
// cccdfkkllmmoprrvx
// ccddekkllmmrrvwwww
// ceeffklmmrvvw
// cddfgkkllmr
