// Write a JavaScript program to find duplicate values in a JavaScript array.

function findDuplicateInArray(arr: number[]) {
  const res: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (arr.indexOf(el) !== arr.lastIndexOf(el) && !res.includes(el)) {
      res.push(el);
    }
  }

  return res;
}

console.log(findDuplicateInArray([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));

// [ 4, 7 ]
