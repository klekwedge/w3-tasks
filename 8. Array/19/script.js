"use strict";
// There are two arrays with individual values, write a JavaScript program
// to compute the sum of each individual index value from the given arrays.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]
function arraysSum(arr1, arr2) {
    const minLength = Math.min(arr1.length, arr2.length);
    const res = [];
    for (let i = 0; i < minLength; i++) {
        res.push(arr1[i] + arr2[i]);
    }
    res.push(...arr1.slice(minLength), ...arr2.slice(minLength));
    return res;
}
console.log(arraysSum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));
// [4,5,8,10,12,13]
