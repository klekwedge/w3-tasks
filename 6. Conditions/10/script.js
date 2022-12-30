"use strict";
// Write a JavaScript program to construct the following pattern,
// using a nested for loop.
let chr = '';
for (let x = 1; x <= 6; x++) {
    for (let y = 1; y < x; y++) {
        chr = chr + "*";
    }
    console.log(chr);
    chr = "";
}
// *
// **
// ***
// ****
// *****
