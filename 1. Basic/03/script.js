"use strict";
// Write a JavaScript program to find the area of a triangle
// where lengths of the three of its sides are 5, 6, 7.
function calcAreaTriangle() {
    const a = 5;
    const b = 6;
    const c = 7;
    const perimeter = (a + b + c) / 2;
    const area = Math.sqrt(perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c));
    console.log(`Area: ${area}`);
}
calcAreaTriangle();
// Area: 14.696938456699069
