"use strict";
// Write a JavaScript program to extract the first half
// of a string of even length.
function copyString(str) {
    if (str.length % 2 !== 0) {
        return '';
    }
    return str.slice(0, str.length / 2);
}
console.log(copyString('gfcnngndmm'));
console.log(copyString('adc2'));
console.log(copyString('ffft'));
console.log(copyString('op6opo'));
console.log(copyString('test'));
// gfcnn
// ad
// ff
// op6
// te
