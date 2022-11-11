"use strict";
// Write a JavaScript program to create a new string of 4 copies
// of the last 3 characters of a given original string. The length
// of the given string must be 3 and above.
function copyString(str) {
    if (str.length < 3) {
        return '';
    }
    return str.slice(-3).repeat(4);
}
console.log(copyString('gfcnngndmm'));
console.log(copyString('adc'));
console.log(copyString('fff'));
console.log(copyString('opopo'));
console.log(copyString('test'));
// dmmdmmdmmdmm
// adcadcadcadc
// ffffffffffff
// opoopoopoopo
// estestestest
