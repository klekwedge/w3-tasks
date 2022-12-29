// Write a JavaScript program to find the number of even values in sequence
// before the first occurrence of a given number.

function findNumbers(arr: number[], num: number) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      break;
    }

    if (arr[i] % 2 === 0) {
      counter++;
    }
  }

  return counter;
}

console.log(findNumbers([1, 2, 3, 4, 5, 6, 7, 8], 5));
console.log(findNumbers([1, 3, 5, 6, 7, 8], 6));
console.log(findNumbers([1, 3, 4, 4, 4, 20, 5, 6, 7, 8], 20));

// 2
// 0
// 3
