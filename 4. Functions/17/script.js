"use strict";
// Write a JavaScript function to  get the number of occurrences
// of each letter in specified string.
function Char_Counts(str) {
    str = str.replace(/\s+/gi, "");
    console.log(str);
    const res = {};
    for (let i = 0; i < str.length; i++) {
        const el = str[i];
        if (res[el]) {
            res[el]++;
        }
        else {
            res[el] = 1;
        }
    }
    return res;
}
console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));
// {
//   T: 1,
//   h: 2,
//   e: 3,
//   q: 1,
//   u: 2,
//   i: 1,
//   c: 1,
//   k: 1,
//   b: 1,
//   r: 2,
//   o: 4,
//   w: 1,
//   n: 1,
//   f: 1,
//   x: 1,
//   j: 1,
//   m: 1,
//   p: 1,
//   s: 1,
//   v: 1,
//   t: 1,
//   l: 1,
//   a: 1,
//   z: 1,
//   y: 1,
//   d: 1,
//   g: 1
// }
