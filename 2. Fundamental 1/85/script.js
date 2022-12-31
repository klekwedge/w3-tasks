"use strict";
// Write a JavaScript program to replace all but the last number
// of characters with the specified mask character.
const mask = (num, pos = 4, mask = "*") => mask.repeat(String(num).length - String(num).slice(-pos).length) +
    String(num).slice(-pos);
console.log(mask(1234567890));
console.log(mask(1234567890, 3));
console.log(mask(1234567890, -4, "$"));
// ******7890
// *******890
// $$$$567890
