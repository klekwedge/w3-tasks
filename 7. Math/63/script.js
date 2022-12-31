"use strict";
// Write a JavaScript program to calculate the volume of a Sphere.
function volumeSphere(radius) {
    return radius < 0 ? null : (4 / 3) * Math.PI * radius ** 3;
}
console.log(volumeSphere(4.0));
console.log(volumeSphere(-4.0));
// 268.082573106329
// null
