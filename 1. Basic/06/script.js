"use strict";
// Write a JavaScript program to determine whether a given year
// is a leap year in the Gregorian calendar
function isLeapYear() {
    const year = new Date().getFullYear();
    console.log((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0));
}
isLeapYear();
// false
