// Write a JavaScript program to swap three numbers without a third variable.
// Test Data:
// (100, 200, 300) -> 300, 100, 200

function test(x: number, y: number, z: number) {
  [x, y, z] = [z, x, y];
  return [x, y, z];
}

let x = 100;
let y = 200;
let z = 300;

console.log(test(x, y, z));

// [ 300, 100, 200 ]
