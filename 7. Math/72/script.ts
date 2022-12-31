// Write a JavaScript program to check if a given number is pronic using
// product of two consecutive numbers. If the number is pronic return
// true otherwise false.
// From Wikipedia - A pronic number is a number that is the product
// of two consecutive integers, that is, a number of the form n(n+1).
// The study of these numbers dates back to Aristotle. They are also
// called oblong numbers, heteromecic numbers, or rectangular numbers;
// however, the term "rectangular number" has also been applied to the
// composite numbers.
// The first few pronic numbers are:
// 0, 2, 6, 12, 20, 30, 42, 56, 72, 90, 110, 132, 156, 182, 210, 240, 272, 306, 342, 380, 420, 462 ...
// Test Data:
// 6 -> true
// 110 -> true
// 200 -> false

function isPronic(num: number) {
  const arr = [];

  for (let i = 0, currentEl = 0; i < num && currentEl < num; i++) {
    currentEl = i * (i + 1);
    arr.push(currentEl);
  }


  return arr.includes(num);
}

console.log(isPronic(6));
console.log(isPronic(110));
console.log(isPronic(200));

// true
// true
// false
