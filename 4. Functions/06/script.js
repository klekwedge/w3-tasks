"use strict";
// Write a JavaScript function that accepts a string as a parameter and find
// the longest word within the string. Go to the editor
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
function findLongestWord(str) {
    return str.split(" ").sort((a, b) => b.length - a.length)[0];
}
console.log(findLongestWord("Web Development Tutorial"));
// Development
