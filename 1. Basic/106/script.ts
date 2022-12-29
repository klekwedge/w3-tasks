// Write a JavaScript program to divide an integer by another integer
// as long as the result is an integer and return the result.

function divideInteger(num: number, divider: number) {
  if (divider === 1) {
    return num;
  } else {
    while (num % divider === 0) {
      num /= divider;
    }
    return num;
  }
}

console.log(divideInteger(120, 20));
console.log(divideInteger(10, 10));
console.log(divideInteger(8, 3));
console.log(divideInteger(11, 9));
console.log(divideInteger(25, 24));

// 6
// 1
// 8
// 11
// 25
