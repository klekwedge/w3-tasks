"use strict";
// Write a JavaScript program to switch case of the minimum possible number
// of letters to make a given string written in the upper case or in
// the lower case.
function switchCase(str) {
    let upper = 0;
    let lower = 0;
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (element === element.toUpperCase()) {
            upper++;
        }
        else {
            lower++;
        }
    }
    return lower > upper ? str.toLowerCase() : str.toUpperCase();
}
console.log(switchCase("AcACffcfffff"));
console.log(switchCase("crwqwKrkek"));
console.log(switchCase("AAAAAAAAAAAAAAAA"));
console.log(switchCase("ffvfcrcecwecr"));
console.log(switchCase("FFFFcccFFFCccccFFFFFF"));
// acacffcfffff
// crwqwkrkek
// AAAAAAAAAAAAAAAA
// ffvfcrcecwecr
// FFFFCCCFFFCCCCCFFFFFF
