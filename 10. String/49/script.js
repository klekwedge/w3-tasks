"use strict";
// Write a JavaScript function to get unique guid (an acronym for 'Globally Unique Identifier?)
// of the specified length, or 32 by default.
// Test Data :
// console.log(guid());
// console.log(guid(15));
// "hRYilcoV7ajokxsYFl1dba41AyE0rUQR"
// "b7pwBqrZwqaDrex"
function guid(len = 32) {
    const res = [];
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < len; i++) {
        res[i] = chars[Math.floor(Math.random() * chars.length)];
    }
    return res.join("");
}
console.log(guid());
console.log(guid(15));
// MnwwQkI8nPjilJtJFx4WhYEKgqfXTiPt
// wdNewqrt7jmsMzY
