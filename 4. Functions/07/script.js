"use strict";
// Write a JavaScript function that accepts a string as a parameter
// and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant,
// we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5
function vowelCount(str) {
    var _a;
    return (_a = str.match(/[aeiouAEIOU]/gi)) === null || _a === void 0 ? void 0 : _a.length;
}
console.log(vowelCount("The quick brown fox"));
// 5
