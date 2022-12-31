// Write a JavaScript program to calculate the volume of a Triangular Prism.

function volumeTriangularPrism(a: number, b: number, c: number, h: number) {
  if (a < 0 || b < 0 || c < 0 || h < 0) {
    return null;
  }
  return (
    (1 / 4) *
    h *
    Math.sqrt(
      -(a ** 4) +
        2 * a * a * b * b +
        2 * a * a * c * c -
        b ** 4 +
        2 * b * b * c * c -
        c ** 4
    )
  );
}

console.log(volumeTriangularPrism(2.0, 4.0, 4.0, 7.0));

// 27.11088342345192
