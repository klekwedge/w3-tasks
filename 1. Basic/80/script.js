"use strict";
// Write a JavaScript to find the longest string from a given array of strings.
function findLongestString(arr) {
    let max = 0;
    let res = "";
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i].length) {
            max = arr[i].length;
            res = arr[i];
        }
    }
    return res;
}
console.log(findLongestString(["12", "215212", "fvfwefx12q"]));
console.log(findLongestString(["1423egfx3cx2", "215212", "fvfwefx12q"]));
console.log(findLongestString(["12", "2153xe2 e212", "fvfwq234x32efx12q"]));
console.log(findLongestString(["12", "2123c x23x5212", "fvfw321x1xefx12q"]));
console.log(findLongestString(["12", "21x32x35212", "fvfwefx12q"]));
// fvfwefx12q
// 1423egfx3cx2
// fvfwq234x32efx12q
// fvfw321x1xefx12q
// 21x32x35212
