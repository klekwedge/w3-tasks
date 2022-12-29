// Write a JavaScript program to check whether all the digits in a
// given number are the same or not.

function testSameDigit(num: number) {
  const arr = String(num).split("");
  const el = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (el !== arr[i]) {
      return false;
    }
  }
  return true;
}

console.log(testSameDigit(1234));
console.log(testSameDigit(1111));
console.log(testSameDigit(22222222));

// false
// true
// true
