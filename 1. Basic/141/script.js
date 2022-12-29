"use strict";
// Write a JavaScript program to find the number of elements which
// presents in both of the given arrays.
function testSameElemBothArrays(arr1, arr2) {
    const obj = Object.assign({}, arr1);
    let counter = 0;
    for (let i = 0; i < arr2.length; i++) {
        const el = arr2[i];
        if (obj.hasOwnProperty(String(el - 1))) {
            counter++;
        }
    }
    return counter;
}
console.log(testSameElemBothArrays([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(testSameElemBothArrays([1, 2, 3, 4], [1, 2, 3, 5]));
console.log(testSameElemBothArrays([1, 2, 3, 4], [11, 22, 33, 44]));
// 4
// 3
// 0
