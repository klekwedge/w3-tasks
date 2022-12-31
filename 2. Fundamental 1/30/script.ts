// Write a JavaScript program to filter out the element(s) of
// a given array, that have one of the specified values.

const without = (arr: number[], ...elements: number[] ) => {
  return arr.filter(item => !elements.includes(item))
};

console.log(without([2, 1, 2, 3], 1, 2));
console.log(without([2, 1, 2, 3], 3));

// [ 3 ]
// [ 2, 1, 2 ]
