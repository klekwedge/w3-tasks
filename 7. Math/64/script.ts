//  Write a JavaScript program to calculate the volume of a Hemisphere.

function volumeHemisphere(radius: number) {
  return radius < 0 ? null : (2.0 * Math.PI * radius ** 3) / 3.0;
}

console.log(volumeHemisphere(4.0));
console.log(volumeHemisphere(-4.0));

// 134.0412865531645
// null
