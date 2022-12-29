"use strict";
// Write a JavaScript program to create a string using the middle three
// characters of a given string of odd length. The string length
// must be greater or equal to three.
function createNewString(str) {
    if (str.length < 3 || str.length % 2 === 0) {
        return str;
    }
    const middle = Math.floor(str.length / 2);
    return str.slice(middle - 1, middle + 2);
}
console.log(createNewString('abcff'));
console.log(createNewString('adc2c'));
console.log(createNewString('fetwmcotfft'));
console.log(createNewString('tovntv5nrhyrtew'));
console.log(createNewString('test5'));
// bcf
// dc2
// mco
// 5nr
// est
