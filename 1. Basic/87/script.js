"use strict";
// Write a JavaScript program to find the kth greatest element of a given array of integers
function kthGreatest(arr, k) {
    arr.sort((a, b) => b - a);
    return arr[k - 1];
}
console.log(kthGreatest([10, 25, 35], 2));
console.log(kthGreatest([10, 25, 250], 3));
console.log(kthGreatest([30, 25, 5], 5));
console.log(kthGreatest([100, 25, 4.0], 2));
console.log(kthGreatest([100, 25, 25], 1));
// 25
// 10
// undefined
// 25
// 100
