// Write a JavaScript program to shuffle an array.

function shuffle(arr: number[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
shuffle(arr);
console.log(arr);

// [
//   5, 0, 9, 1, 7,
//   8, 3, 2, 4, 6
// ]
