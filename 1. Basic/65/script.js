"use strict";
// Write a JavaScript program to test whether a string end with "Script".
// The string length must be greater or equal to 6
function testString(str) {
    if (str.length < 6) {
        return false;
    }
    return /Script$/g.test(str);
}
console.log(testString("abcffScript"));
console.log(testString("tovntv5nrhyrtew"));
console.log(testString("Scripttovntv5nrhyrtew"));
console.log(testString("teScriptst5"));
console.log(testString("t65e4johb4Script53vest5"));
// true
// false
// false
// false
// false
