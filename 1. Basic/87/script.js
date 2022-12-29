"use strict";
// Write a JavaScript program to check whether two arrays of
// integers of same length are similar or not. The arrays
// will be similar if one array can be obtained from another
// array by swapping at most one pair of elements.
function checkArrays(arr1, arr2) {
    let permutation = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            permutation.push(i);
        }
        if (permutation.length === 2) {
            return permutation;
        }
    }
    return [];
}
function checkObtain(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let permutation = checkArrays(arr1, arr2);
    if (permutation.length > 0) {
        [arr1[permutation[0]], arr1[permutation[1]]] = [
            arr1[permutation[1]],
            arr1[permutation[0]],
        ];
        permutation = checkArrays(arr1, arr2);
        if (permutation.length === 0) {
            return true;
        }
        return false;
    }
    return true;
}
console.log(checkObtain([10, 20, 30], [10, 20, 30]));
console.log(checkObtain([10, 20, 30], [30, 10, 20]));
console.log(checkObtain([10, 20, 30, 40], [10, 30, 20, 40]));
console.log(checkObtain([10, 55, 20, 30, 40], [11, 10, 30, 20, 40]));
console.log(checkObtain([10, 25, 30, 40], [10, 35, 20, 40]));
// true
// false
// true
// false
// false
