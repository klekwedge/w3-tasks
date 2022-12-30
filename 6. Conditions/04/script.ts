// Write a JavaScript conditional statement to find the
// largest of five numbers. Display an alert box to show the result.

function findMaxNumber(a: number, b: number, c: number, d: number, f: number) {
  if (a >= b && a >= c && a >= d && a >= f) {
    return a;
  } else if (b >= a && b >= c && b >= d && b >= f) {
    return b;
  } else if (c >= a && c >= b && c >= d && c >= f) {
    return c;
  } else if (d >= a && d >= c && d >= b && d >= f) {
    return d;
  } else {
    return f;
  }
}

console.log(findMaxNumber(30, 40, -10, 56, 5));
console.log(findMaxNumber(30, 40, -125, 32, 5));
console.log(findMaxNumber(30, 552, -10, 742, 5));

// 56
// 40
// 742
