"use strict";
// Write a JavaScript program to find the leap years in a given range of years.
function leapYearRange(start, end) {
    const res = [];
    for (let i = start; i <= end; i++) {
        if ((i % 4 === 0 && i % 100 !== 0) || (i % 100 === 0 && i % 400 === 0)) {
            res.push(i);
        }
    }
    return res;
}
console.log(leapYearRange(2000, 2012));
// [ 2000, 2004, 2008, 2012 ]
