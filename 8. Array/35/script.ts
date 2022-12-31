// Write a JavaScript function to get a random item from an array.

function randomItem(arr: number[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const arr = [254, 45, 212, 365, 2543];

console.log(randomItem(arr));

// 254
