// Write a JavaScript program to find the maximal number from a given
// positive integer by deleting exactly one digit of the given number.

function findMaximalNumberFromDeleting(num: number) {
  const str = String(num);
  const res = [];

  for (let i = 0; i < str.length; i++) {
    res.push(str.slice(0, i) + str.slice(i + 1));
  }

  return Math.max(...res.map(i => +i));
}

console.log(findMaximalNumberFromDeleting(100));
console.log(findMaximalNumberFromDeleting(10));
console.log(findMaximalNumberFromDeleting(1245));
console.log(findMaximalNumberFromDeleting(2112));
console.log(findMaximalNumberFromDeleting(521));

// 10
// 1
// 245
// 212
// 52
