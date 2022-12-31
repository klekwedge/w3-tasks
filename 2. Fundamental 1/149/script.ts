// Write a JavaScript program to get a random element from an array.

const sample = (arr: number[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

console.log(sample([3, 7, 9, 11]));

// 11
