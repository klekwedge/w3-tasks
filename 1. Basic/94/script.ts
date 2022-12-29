// Write a JavaScript program to find the number which appears
// most in a given array of integers.

interface INumberObj {
  [index: number]: number;
}

function findGreaterConformity(arr: number[]): number[] {
  let obj: INumberObj = {};

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (obj[el]) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  }

  let num = "";
  let maxRepeats = 0;

  Object.entries(obj).forEach((item) => {
    if (maxRepeats < item[1]) {
      num = item[0];
      maxRepeats = item[1];
    }
  });

  return [+num, maxRepeats];
}

console.log(findGreaterConformity([1, 2, 3, 8, 9, 3, 2, 1, 2, 3, 3, 3, 2]));
console.log(findGreaterConformity([1, 18, 2, 3, 18, 9, 1, 18, 4, 5]));
console.log(findGreaterConformity([13, 2, 3, 13, 13, 8, 9]));
console.log(findGreaterConformity([100, 25, 25, 4.0, 25]));
console.log(findGreaterConformity([100, 25, 25, 100]));

// [ 3, 5 ]
// [ 18, 3 ]
// [ 13, 3 ]
// [ 25, 3 ]
// [ 25, 2 ]
