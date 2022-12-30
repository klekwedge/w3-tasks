"use strict";
// Write a JavaScript program to compute the sum and product of an array of integers.
const array = [1, 2, 3, 4, 5, 6];
let sum = 0;
let product = 1;
for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
    product *= array[i];
}
console.log("Sum: " + sum + " Product: " + product);
// Sum: 21 Product: 720
