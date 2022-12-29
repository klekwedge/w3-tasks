"use strict";
// Write a JavaScript program to create the dot products of two given
// 3D vectors. Note: The dot product is the sum of the products
// of the corresponding entries of the two sequences of numbers.
function createDotProducts(a, b) {
    if (a.length !== 3 || b.length !== 3) {
        return null;
    }
    let res = 0;
    for (let i = 0; i < a.length; i++) {
        res += a[i] * b[i];
    }
    return res;
}
console.log(createDotProducts([11, 23, 6], [1, 5, 4]));
console.log(createDotProducts([1, 9, 7], [9, 1, 2]));
console.log(createDotProducts([1, 2, 3], [1, 2, 3]));
console.log(createDotProducts([2, 4, 6], [2, 4, 6]));
console.log(createDotProducts([1, 1, 1], [0, 1, -1]));
// 150
// 32
// 14
// 56
// 0
