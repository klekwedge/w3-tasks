"use strict";
// Write a JavaScript program to create a new string
// from a given string taking the last 3 characters and
// added at both the front and back. The string length
// must be 3 or more.
function createNewString(str) {
    if (str.length < 3) {
        return str;
    }
    const lastThreeChar = str.slice(-3);
    return lastThreeChar + str + lastThreeChar;
}
console.log(createNewString('Hello'));
console.log(createNewString('Nice'));
console.log(createNewString('Good'));
console.log(createNewString('Goodbye'));
// lloHellollo
// iceNiceice
// oodGoodood
// byeGoodbyebye
