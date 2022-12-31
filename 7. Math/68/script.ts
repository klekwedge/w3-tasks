// Write a JavaScript program to calculate the sum of the digits
// of a given number. In mathematics, the digit sum of a natural
// number in a given number base is the sum of all its digits.
// For example, the digit sum of the decimal number 6098 would
// be 6+0+9+8=23

function sumOfDigits(num: number) {
  return String(Math.abs(num))
    .split("")
    .map((item) => +item)
    .reduce((prev, next) => prev + next);
}

console.log(sumOfDigits(6098));
console.log(sumOfDigits(-501));
console.log(sumOfDigits(2546));

// 23
// 6
// 17
