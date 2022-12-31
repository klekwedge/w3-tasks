// Write a JavaScript function to test if a number is a power of 2.
// Test Data :
// console.log(power_of_2(16));
// console.log(power_of_2(18));
// console.log(power_of_2(256));
// Output :
// true
// false
// true

function powerOf2(num: number) {
  const buff = num;

  if (num === 1 || num === 2) {
    return true;
  }

  let count = 1;

  while (num % 2 === 0) {
    count *= 2;
    num /= 2;
  }

  return count === buff;
}

console.log(powerOf2(1));
console.log(powerOf2(2));
console.log(powerOf2(16));
console.log(powerOf2(18));
console.log(powerOf2(256));
console.log(powerOf2(512));

// true
// true
// true
// false
// true
// true
