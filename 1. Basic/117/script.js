"use strict";
// Write a JavaScript program to check whether a given matrix is an identity matrix. Go to the editor
// Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, of
// size n is the n * n square matrix with ones on the main diagonal and zeros elsewhere.
function isSquareMatrix(arr) {
    const rows = arr.length;
    for (let i = 0; i < arr.length; i++) {
        const col = arr[i];
        if (col.length !== rows) {
            return false;
        }
    }
    return true;
}
function isIdentityMatrix(arr) {
    if (!isSquareMatrix(arr)) {
        console.log('Matrix should be a square matrix');
        return false;
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] !== 0 && j !== i) {
                return false;
            }
            if (arr[i][j] !== 1 && j === i) {
                return false;
            }
        }
    }
    return true;
}
console.log(isIdentityMatrix([
    [1, 0, 0, 2],
    [0, 1, 0],
    [0, 0, 1],
]));
console.log(isIdentityMatrix([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
]));
console.log(isIdentityMatrix([
    [1, 0, 1],
    [0, 1, 0],
    [0, 0, 1],
]));
// Matrix should be a square matrix
// false
// true
// false
