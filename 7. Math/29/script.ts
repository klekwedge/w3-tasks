// Write a JavaScript function to convert a positive number to negative number.
// Test Data :
// console.log(pos_to_neg(15));
// -15

function posToNeg(num: number) {
  return -Math.abs(num);
}

console.log(posToNeg(15));

// -15