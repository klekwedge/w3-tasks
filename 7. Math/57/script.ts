// Write a JavaScript program to calculate the volume of a Cube.

function volumeCube(length: number) {
  if (length < 0) {
    return null;
  }

  return length ** 3;
}

console.log(volumeCube(3.0));
console.log(volumeCube(-3.0));

// 24
// null
