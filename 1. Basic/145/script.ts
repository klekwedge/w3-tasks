// Write a JavaScript program to find the maximum integer
// n such that 1 + 2 + ... + n <= a given integer.

function sumN(num: number) {
  let res = 0;
  let counter = 0;
  while (res <= num) {
    res += res + 1;
    counter++;
  }

  return counter;
}

console.log(sumN(11));
console.log(sumN(15));
console.log(sumN(6));

// 4
// 5
// 3
