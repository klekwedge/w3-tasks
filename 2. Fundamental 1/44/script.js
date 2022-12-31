"use strict";
// Write a JavaScript program to remove falsey values from a given array.
const compact = (arr) => arr.filter((item) => item);
console.log(compact([0, 1, false, 2, "", 3, "a", NaN, "s", 34]));
console.log(compact([false, NaN]));
// [ 1, 2, 3, 'a', 's', 34 ]
// []
