"use strict";
// Write a JavaScript function to compute the factors of a positive integer.
function factors(num) {
    const numFactors = [];
    for (let i = 1; i <= Math.floor(Math.sqrt(num)); i += 1)
        if (num % i === 0) {
            numFactors.push(i);
            // if (num / i !== i) {
            //   numFactors.push(num / i);
            // }
        }
    return numFactors.sort((a, b) => a - b);
}
console.log(factors(15));
console.log(factors(16));
console.log(factors(17));
// [ 1, 3, 5, 15 ]
// [ 1, 2, 4, 8, 16 ]
// [ 1, 17 ]
