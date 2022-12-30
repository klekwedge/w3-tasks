// Write a JavaScript function which will take an array of
// numbers stored and find the second lowest and second greatest numbers, respectively.

function secondGreatestLowest(arr: number[]) {
  arr.sort((a, b) => a - b);
  return [arr[1], arr[arr.length - 2]];
}

console.log(secondGreatestLowest([1, 2, 3, 4, 5]));

// [ 2, 4 ]
