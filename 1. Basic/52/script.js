"use strict";
// Write a JavaScript program to check whether a given string
// contains equal number of p's and t's
function convertLetters(str) {
    var _a, _b;
    return ((_a = str.match(/p/gi)) === null || _a === void 0 ? void 0 : _a.length) === ((_b = str.match(/t/gi)) === null || _b === void 0 ? void 0 : _b.length);
}
console.log(convertLetters('ptptpt'));
console.log(convertLetters('ppppppppttttttttttttttt'));
console.log(convertLetters('123'));
console.log(convertLetters('ptptpptptpt'));
console.log(convertLetters('ptptptptptpptptptptttt'));
// true
// false
// true
// false
// false
