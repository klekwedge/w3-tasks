"use strict";
// Write a JavaScript program to extract the first half
// of a string of even length.
function createNewString(str) {
    if (str.length % 2 !== 0) {
        return '';
    }
    return str.slice(0, str.length / 2);
}
console.log(createNewString('gfcnngndmm'));
console.log(createNewString('adc2'));
console.log(createNewString('ffft'));
console.log(createNewString('op6opo'));
console.log(createNewString('test'));
// gfcnn
// ad
// ff
// op6
// te
