// Write a JavaScript program to find the number of times to
// replace a given number with the sum of its digits until it convert
// to a single digit number.

function findNumberOfTimes(num: number) {
  let str = String(num);
  let count = 0;

  while (str.length !== 1) {
    let sum = str.split("").map(i => +i).reduce((prev, next) => prev + next)
    str = String(sum);
    count++;
  }

  return count;
}

console.log(findNumberOfTimes(123));
console.log(findNumberOfTimes(156));
console.log(findNumberOfTimes(9999999));
console.log(findNumberOfTimes(547738284238382));
console.log(findNumberOfTimes(1));

// 1
// 2
// 2
// 3
// 0