// Write a JavaScript function to calculate the percentage (%) of a number.
// Test Data :
// console.log(percentage(1000, 47.12));
// 471.2

function percentage(num: number, per: number) {
  return (num / 100) * per;
}

console.log(percentage(1000, 47.12));

// 471.2
