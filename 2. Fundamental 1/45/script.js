"use strict";
// Write a JavaScript program to split values into two groups,
// if an element in filter is truthy, the corresponding element
// in the collection belongs to the first group; otherwise,
// it belongs to the second group.
const bifurcate = (arr, booleanArr) => [
    arr.filter((item, index) => booleanArr[index]),
    arr.filter((item, index) => !booleanArr[index]),
];
console.log(bifurcate(["beep", "boop", "foo", "bar"], [true, true, false, true]));
// [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
