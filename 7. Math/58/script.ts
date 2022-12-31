// Write a JavaScript program to calculate the volume of a Cone.

function volumeCone(radius: number, height: number) {
  if (radius < 0 || height < 0) {
    return null;
  }

  return (1 / 3) * Math.PI * radius ** 2 * height;
}

console.log(volumeCone(3.0, 7.0));
console.log(volumeCone(-3.0, 7.0));

// 65.97344572538566
// null
