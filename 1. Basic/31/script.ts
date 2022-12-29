// Write a JavaScript program to find the largest of three given integers.

function findLargestNum(a: number, b: number, c: number): number {
  return Math.max(a, b, c);
}

console.log(findLargestNum(1, 6, 7));
console.log(findLargestNum(5341, 22, 4));
console.log(findLargestNum(1, 1, 1));

// 7
// 5341
// 1
