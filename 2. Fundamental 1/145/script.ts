// Write a JavaScript program to randomize the order
// of the values of an array, returning a new array.

const shuffle = (arr: number[]) => {
  const newArr = JSON.parse(JSON.stringify(arr));

  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }

  return newArr;
};

const foo = [1, 2, 3];

console.log(shuffle(foo));

// [ 2, 1, 3 ]
