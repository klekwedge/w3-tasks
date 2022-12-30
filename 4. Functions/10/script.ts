// Write a JavaScript function which returns the n rows by n columns identity matrix.

function identityMatrix(n: number) {
  const res: number[][] = [];
  for (let i = 0; i < n; i++) {
    res[i] = []
    for (let j = 0; j < n; j++) {
      if (i === j) {
        res[i].push(1);
      } else {
        res[i].push(0);
      }
    }
  }

  for (let i = 0; i < res.length; i++) {
    console.log(res[i]);
  }
  return res;
}

identityMatrix(4)

// [ 1, 0, 0, 0 ]
// [ 0, 1, 0, 0 ]
// [ 0, 0, 1, 0 ]
// [ 0, 0, 0, 1 ]
