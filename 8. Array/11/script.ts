// Write a JavaScript program to find the sum of squares of a numeric vector.

function sumSq(arr: number[]) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], 2);
  }
  return sum;
}

console.log(sumSq([0, 1, 2, 3, 4]));

// 30
