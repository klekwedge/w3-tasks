// Write a JavaScript program to extract out the values
// at the specified indexes from a specified array.

function pullAtIndex(arr: any[], elements: number[]) {
  return arr.filter((item, index) => elements.includes(index));
}

let arra1 = ["a", "b", "c", "d", "e", "f"];
console.log(pullAtIndex(arra1, [1, 3]));

let arra2 = [1, 2, 3, 4, 5, 6, 7];
console.log(pullAtIndex(arra2, [4]));

// [ 'b', 'd' ]
// [ 5 ]
