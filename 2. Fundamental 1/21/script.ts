// Write a JavaScript program to get every nth element in a given array.

const everyNth = (arr: number[], pos: number) => {
  return arr.filter((item, index) => (index + 1) % pos === 0)
};

console.log(everyNth([1, 2, 3, 4, 5, 6], 1));
console.log(everyNth([1, 2, 3, 4, 5, 6], 2));
console.log(everyNth([1, 2, 3, 4, 5, 6], 3));
console.log(everyNth([1, 2, 3, 4, 5, 6], 4));

// [ 1, 2, 3, 4, 5, 6 ]
// [ 2, 4, 6 ]
// [ 3, 6 ]
// [ 4 ]
