// Write a JavaScript function to remove a specific element from an array.
// Test data :
// console.log(remove_array_element([2, 5, 9, 6], 5));
// [2, 9, 6]

function removeElement(arr: number[], num: number) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (el !== num) {
      res.push(el);
    }
  }

  return res;
}

const array1 = [1, 2, 3];
const array2 = [2, 30, 1];

console.log(removeElement([2, 5, 9, 6], 5));

// [ 2, 9, 6 ]
