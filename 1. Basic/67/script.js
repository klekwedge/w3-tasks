"use strict";
// Write a JavaScript program to create a new string from a given string,
// removing the first and last characters of the string if the first or last
// character are 'P'. Return the original string if the condition is not satisfied.
function testString(str) {
    return /^P.*P$/g.test(str) ? str.replace(/^P|P$/g, "") : str;
}
console.log(testString("P12$$21!P"));
console.log(testString("Newt"));
console.log(testString("FF"));
console.log(testString("P!PPP!P"));
console.log(testString("P21121FcFF"));
// 12$$21!
// Newt
// FF
// !PPP!
// P21121FcFF
