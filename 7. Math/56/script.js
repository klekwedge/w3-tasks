"use strict";
// Write a JavaScript program to calculate the volume of a Cuboid.
function volCuboid(width, length, height) {
    if (width < 0 || length < 0 || height < 0) {
        return null;
    }
    return width * length * height;
}
console.log(volCuboid(3.0, 2.0, 4.0));
console.log(volCuboid(3.0, -2.0, 4.0));
// 24
// null
