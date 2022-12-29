// Write a JavaScript program to compute the sum of
// cubes of all integer from 1 to a given integer.

function sumOfCubes(num: number) {
  let res = 0;
  for (let i = 1; i <= num; i++) {
    res += i ** 3;
  }

  return res;
}

console.log(sumOfCubes(3));
console.log(sumOfCubes(4));
console.log(sumOfCubes(5));

// 36
// 100
// 225
