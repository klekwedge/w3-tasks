// Write a JavaScript program to check whether a point lies strictly inside a given circle. Go to the editor
// Input:
// Point inside a circle (a, b)
// Center of the circle (x, y)
// Radius of circle: r


function isPointInsideCircle(
  a: number,
  b: number,
  x: number,
  y: number,
  r: number,
) {
  return (x - a) ** 2 + (y - b) ** 2 <= r ** 2;
}

console.log(isPointInsideCircle(0, 0, 2, 4, 6));
console.log(isPointInsideCircle(0, 0, 6, 8, 6));
console.log(isPointInsideCircle(10, 4, 3, 2, 1));

// true
// false
// false
