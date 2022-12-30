// Write a JavaScript program to compute the greatest common divisor
// (GCD) of two positive integers.

let a = 2154;
let b = 458;
let gcd;

while (a != b) {
  if (a > b) {
    a = a - b;
  } else {
    b = b - a;
  }
}

gcd = a;

console.log(gcd);

// 2