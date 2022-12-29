"use strict";
// Write a JavaScript program to create a new string from a given
// string with the first character of the given string added at the front and back.
function createNewString(str) {
    const firstLetter = str[0];
    return firstLetter + str + firstLetter;
}
console.log(createNewString('Hello'));
console.log(createNewString('Look'));
console.log(createNewString('Python'));
// HHelloH
// LLookL
// PPythonP
