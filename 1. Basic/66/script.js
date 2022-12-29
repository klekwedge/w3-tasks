"use strict";
// Write a JavaScript program to display the city name if the string
// begins with "Los" or "New" otherwise return blank
function testString(str) {
    if (str.length < 3) {
        return false;
    }
    return /^[Los|New]/g.test(str);
}
console.log(testString("Losabcff"));
console.log(testString("Newtovntv5nrhyrtew"));
console.log(testString("ScrLosipttovntvNew5nrhyrtew"));
console.log(testString("tNeweScriptst5"));
console.log(testString("tLos"));
// true
// true
// false
// false
// false
