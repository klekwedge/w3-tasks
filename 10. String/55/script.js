"use strict";
// Write a JavaScript function to check whether a string is a Pangram or not.
// A pangram or holoalphabetic sentence is a sentence using every letter of
// a given alphabet at least once. Pangrams have been used to display
// typefaces, test equipment, and develop skills in handwriting,
// calligraphy, and keyboarding
// Test Data :
// ("The quick brown fox jumps over the lazy dog") -> true
// ("Waltz, bad nymph, for quick jigs vex.") -> true
// ("The five boxing wizards jump quickly.") -> true
// ("The boxing wizards jump quickly.") -> false
// (12356) -> "It must be a string."
function test(str) {
    let res = "";
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (!res.includes(str[i]) && /\w/.test(str[i])) {
            res += str[i];
        }
    }
    return res.length === 26;
}
console.log(test("The quick brown fox jumps over the lazy dog"));
console.log(test("Waltz, bad nymph, for quick jigs vex."));
console.log(test("The five boxing wizards jump quickly."));
console.log(test("The boxing wizards jump quickly."));
// true
// true
// true
// false
