"use strict";
// Write a JavaScript function that generates a string id (specified length)
// of random characters.
function makeId(l) {
    let text = "";
    let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < l; i++) {
        text += charList[(Math.floor(Math.random() * charList.length))];
    }
    return text;
}
console.log(makeId(8));
// d82dsCj2
