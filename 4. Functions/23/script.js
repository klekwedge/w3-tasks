"use strict";
// Write a JavaScript function to find the first not repeated character.
function findFirstNotRepeatedChar(str) {
    const obj = {};
    for (let i = 0; i < str.length; i++) {
        if (i === str.lastIndexOf(str[i]) && !obj.hasOwnProperty(str[i])) {
            return str[i];
        }
        else {
            obj[str[i]] = str[i];
        }
    }
}
console.log(findFirstNotRepeatedChar("abacddbec"));
// e
