// Write a JavaScript program to get a random number in the specified range.

const randomIntegerInRange = (start: number, end: number) => {
  return start + Math.floor(Math.random() * (end - start + 1));
};

console.log(randomIntegerInRange(0, 5));
console.log(randomIntegerInRange(2, 5));
console.log(randomIntegerInRange(5, -5));
console.log(randomIntegerInRange(-2, -7));


// 2
// 5
// 3
// -6
