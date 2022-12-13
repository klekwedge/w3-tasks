"use strict";
// Write a JavaScript to replace each character of a given string
// by the next one in the English alphabet.  Go to the editor
// Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.
function replaceChars(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "z") {
            res += "a";
        }
        else if (str[i] === "Z") {
            res += "A";
        }
        else {
            res += String.fromCharCode(str[i].charCodeAt(0) + 1);
        }
    }
    return res;
}
console.log(replaceChars("fvfwefx12q"));
console.log(replaceChars("1423egfx3cx2q"));
console.log(replaceChars("vfwq234x32efx12q"));
console.log(replaceChars("fw321x1xefx12q"));
console.log(replaceChars("abcdxyz"));
// gwgxfgy23r
// 2534fhgy4dy3r
// wgxr345y43fgy23r
// gx432y2yfgy23r
// bcdeyza
