// Write a JavaScript program to check whether a matrix is a diagonal matrix or not. In linear
// algebra, a diagonal matrix is a matrix in which the entries outside the main diagonal are
// all zero (the diagonal from the upper left to the lower right).

function isDiagonalMatrix(arr: number[][]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if(arr[i][j] !== 0 && j !== i){
        return false;
      }
    }
  }

  return true;
}

console.log(
  isDiagonalMatrix([
    [1, 0, 0],
    [0, 2, 0],
    [0, 0, 3],
  ])
);
console.log(
  isDiagonalMatrix([
    [1, 0, 0],
    [0, 2, 3],
    [0, 0, 3],
  ])
);
console.log(
  isDiagonalMatrix([
    [3, 2, 0],
    [0, 2, 3],
    [1, 0, 3],
  ])
);

// true
// false
// false
