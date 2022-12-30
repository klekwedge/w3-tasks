"use strict";
// Write a JavaScript function that accepts a number as a parameter
// and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1
// that has no positive divisors other than 1 and itself.
function isPrime(num) {
    if (num === 1) {
        return false;
    }
    else if (num === 2) {
        return true;
    }
    else {
        for (let x = 2; x < num; x++) {
            if (num % x === 0) {
                return false;
            }
        }
        return true;
    }
}
console.log(isPrime(37));
// true
