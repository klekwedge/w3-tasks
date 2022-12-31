// Write a JavaScript program to calculate the volume of a Pyramid.

function volumePyramid(baseLength: number, baseWidth: number, height: number) {
  if (baseLength < 0 || baseWidth < 0 || height < 0) {
    return null;
  }
  return (baseLength * baseWidth * height) / 3.0;
}

console.log(volumePyramid(2.0, 3.0, 7.0));
console.log(volumePyramid(2.0, -3.0, 7.0));

// 14
// null
