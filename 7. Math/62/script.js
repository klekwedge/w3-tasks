"use strict";
// Write a JavaScript program to calculate the volume of
// a prism using only its height and one of its hexagonal sides.
function volumePentagonalPrism(baseEdge, height) {
    if (baseEdge < 0 || height < 0) {
        return null;
    }
    return ((1 / 4) *
        height *
        baseEdge *
        baseEdge *
        Math.sqrt(5 * (5 + 2 * Math.sqrt(5))));
}
console.log(volumePentagonalPrism(4.0, 8.0));
console.log(volumePentagonalPrism(4.0, -8.0));
// 220.22110727538777
// 495.4974913696225
// null
