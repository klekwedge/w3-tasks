"use strict";
// Write a JavaScript program to find the number of inversions of a given
// array of integers. Note: Two elements of the array a stored at positions
// i and j form an inversion if a[i] > a[j] and i < j.
function findNumberInversions(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (element > arr[j]) {
                res++;
            }
        }
    }
    return res;
}
console.log(findNumberInversions([1, 2, 3, 2, 1, 2, 3, 3, 3, 2]));
console.log(findNumberInversions([1, 18, 2, 3, 18, 9, 1, 18, 4, 5]));
console.log(findNumberInversions([13, 2, 3, 13, 13, 8, 9]));
console.log(findNumberInversions([100, 25, 25, 4, 25]));
console.log(findNumberInversions([100, 25, 25, 100]));
// 9
// 17
// 8
// 6
// 2
