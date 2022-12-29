// Write a JavaScript program to check a number from three given numbers where
// two numbers are equal, find the third one.

function checkNumber(a: number, b: number, c: number) {
  if (a === b) {
    return c;
  }

  if (a === c) {
    return b;
  }

  if (b === c) {
    return a;
  }

  return null;
}

console.log(checkNumber(1, 2, 2));
console.log(checkNumber(1, 1, 2));
console.log(checkNumber(1, 2, 3));

// 1
// 2
// null
