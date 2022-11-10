"use strict";
// Write a JavaScript program to create a new string from a
// given string changing the position of first and last
// characters. The string length must be greater than or equal to 1.
function changePositionCharacters(str) {
    if (str.length <= 1) {
        return null;
    }
    const arr = str.split('');
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arr.join('');
}
console.log(changePositionCharacters('Hello'));
console.log(changePositionCharacters('Look'));
console.log(changePositionCharacters('Python'));
// oellH
// kooL
// nythoP
