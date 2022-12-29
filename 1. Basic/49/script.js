"use strict";
// Write a JavaScript program to replace every character in a given
// string with the character following it in the alphabet.
function replaceCharacter(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'z') {
            res += 'a';
        }
        else if (str[i] === 'Z') {
            res += 'A';
        }
        else {
            res += String.fromCharCode(1 + str[i].charCodeAt(0));
        }
    }
    return res;
}
console.log(replaceCharacter('Hello World'));
console.log(replaceCharacter('Goodbye'));
console.log(replaceCharacter('Example'));
console.log(replaceCharacter('Test'));
console.log(replaceCharacter('ZzABC'));
// Ifmmp!Xpsme
// Hppeczf
// Fybnqmf
// Uftu
// AaBCD
