"use strict";
// Write a JavaScript program to calculate the volume of a Cylinder.
function volumeCylinder(radius, height) {
    if (radius < 0 || height < 0) {
        return null;
    }
    return Math.PI * radius ** 2 * height;
}
console.log(volumeCylinder(2.0, 5.0));
console.log(volumeCylinder(2.0, -5.0));
// 62.83185307179586
// null
