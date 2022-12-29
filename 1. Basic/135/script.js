"use strict";
// Write a JavaScript program to remove all characters from a
// given string that appear more than once.
function removeDuplicateChars(str) {
    const obj = {};
    for (let i = 0; i < str.length; i++) {
        const el = str[i];
        if (obj[el]) {
            obj[el]++;
        }
        else {
            obj[el] = 1;
        }
    }
    return Object.entries(obj)
        .filter((item) => item[1] === 1)
        .map((item) => item[0]).join('');
}
console.log(removeDuplicateChars("abcdabc"));
console.log(removeDuplicateChars("python"));
console.log(removeDuplicateChars("abcabc"));
console.log(removeDuplicateChars("1365451"));
// d
// python
// 364
