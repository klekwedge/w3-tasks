"use strict";
// Write a JavaScript function to truncates a string if it is longer than
// the specified number of characters. Truncated strings will end with a
// translatable ellipsis sequence ("…") (by default) or specified characters.
// Test Data :
// console.log(text_truncate('We are doing JS string exercises.'))
// console.log(text_truncate('We are doing JS string exercises.',19))
// console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
// "We are doing JS string exercises."
// "We are doing JS ..."
// "We are doing !!"
function textTruncate(str, position, char = "...") {
    if (position) {
        return str.slice(0, position - char.length) + char;
    }
    return str;
}
console.log(textTruncate("We are doing JS string exercises."));
console.log(textTruncate("We are doing JS string exercises.", 19));
console.log(textTruncate("We are doing JS string exercises.", 15, "!!"));
// We are doing JS string exercises.
// We are doing JS ...
// We are doing !!
