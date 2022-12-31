"use strict";
// Write a JavaScript program that takes an string and returns the last
// character of each word if the word is even in length or the middle
// character if it is odd in length.
// Test Data:
// ("Number of even numbers and their sum") -> "r, f, n, b, n, e, u"
// ("JavaScript Math and Numbers- Exercises Practice Solution") -> "t, h, n, -, c, e, n"
function test(str) {
    return str
        .split(" ")
        .map((item) => item.length % 2 === 0 ? item[item.length - 1] : item[Math.floor(item.length / 2)])
        .join(", ");
}
let text = "Number of even numbers and their sum";
console.log(test(text));
text = "JavaScript Math and Numbers- Exercises Practice Solution";
console.log(test(text));
// r, f, n, b, n, e, u
// t, h, n, -, c, e, n
