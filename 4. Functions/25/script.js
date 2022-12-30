"use strict";
// Write a JavaScript function that accept a list of country names as
// input and returns the longest country name as output.
function longestCountryName(countryNames) {
    return countryNames.sort((a, b) => b.length - a.length)[0];
}
console.log(longestCountryName(["Australia", "Germany", "United States of America"]));
// United States of America
