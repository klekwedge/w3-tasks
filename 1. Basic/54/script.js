"use strict";
// Write a JavaScript program to create a new string of
// specified copies (positive number) of a given string.
function copyString(str, repeatNum) {
    return str.repeat(repeatNum);
}
console.log(copyString('gfcnngndmm', 5));
console.log(copyString('adc', 3));
console.log(copyString('fff', 4));
console.log(copyString('opopo', 2));
console.log(copyString('test', 5));
// gfcnngndmmgfcnngndmmgfcnngndmmgfcnngndmmgfcnngndmm
// adcadcadc
// ffffffffffff
// opopoopopo
// testtesttesttesttest
