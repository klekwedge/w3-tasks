"use strict";
// Write a JavaScript program to check whether a given matrix is lower triangular or not.
// Note: A square matrix is called lower triangular if all the entries above the main diagonal are zero.
function isLowerTriangular(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (j > i && arr[i][j] !== 0) {
                return false;
            }
        }
    }
    return true;
}
console.log(isLowerTriangular([
    [1, 0, 0],
    [2, 0, 0],
    [0, 3, 3],
]));
console.log(isLowerTriangular([
    [1, 0, 1],
    [2, 0, 0],
    [0, 3, 3],
]));
console.log(isLowerTriangular([
    [1, 2, 1],
    [2, 2, 0],
    [0, 0, 3],
]));
// true
// false
// false
