// Write a JavaScript function that reverse a number.

function reverseNumber(num: number) {
  return String(num).split('').reverse().join('')
}

console.log(reverseNumber(32243));

// 34223
