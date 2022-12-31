// Write a JavaScript program to get a random number in the specified range.

const randomNumberInRange = (start: number, end: number) => {
  return start + Math.random() * (end - start);
};

console.log(randomNumberInRange(2, 10));
console.log(randomNumberInRange(1, 5));
console.log(randomNumberInRange(-5, -2));
console.log(randomNumberInRange(0, 1));

// 7.667233034301466
// 2.5051348637916044
// -4.769800385466727
// 0.5613418800144858
