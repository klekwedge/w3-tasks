"use strict";
// Write a JavaScript program to sort the strings of a given
// array of strings in the order of increasing lengths.
// Note: Do not change the order if the lengths of two string are same.
function sortByStringLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}
console.log(sortByStringLength(["xyz", "acd", "aa", "bb", "zzz", "", "a", "b"]));
console.log(sortByStringLength([
    "213x2",
    "5c432x",
    "323132",
    "5yvhvfffv",
    "fc",
    "",
    "a",
    "b",
]));
console.log(sortByStringLength(["21gcft", "acd", "c432", "bb", "5c234", "2121", "a", "b"]));
// [
//   '',    'a',   'b',
//   'aa',  'bb',  'xyz',
//   'acd', 'zzz'
// ]
// [ '', 'a', 'b', 'fc', '213x2', '5c432x', '323132', '5yvhvfffv' ]
// [
//   'a',     'b',
//   'bb',    'acd',
//   'c432',  '2121',
//   '5c234', '21gcft'
// ]
