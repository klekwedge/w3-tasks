"use strict";
// Write a JavaScript program to change the capitalization of
// all letters in a given string.
function changeCase(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            res += str[i].toLowerCase();
        }
        else {
            res += str[i].toUpperCase();
        }
    }
    return res;
}
console.log(changeCase("w3resource"));
console.log(changeCase("Germany"));
console.log(changeCase("FicmrxwxeFtbme3zrkVy"));
// W3RESOURCE
// gERMANY
// fICMRXWXEfTBME3ZRKvY
