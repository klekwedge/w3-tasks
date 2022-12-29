"use strict";
// Write a program to check whether a specified character
// exists within the 2nd to 4th position in a given string.
function findCharacter(str, char) {
    return str.slice(1, 4).includes(char);
}
console.log(findCharacter('Hello', 'e'));
console.log(findCharacter('Hello', 'l'));
console.log(findCharacter('Hello', 'H'));
console.log(findCharacter('Hello', 'o'));
// true
// true
// false
// false
