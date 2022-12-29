// Write a JavaScript program to check whether a given fraction is proper or not.
// Note: There are two types of common fractions, proper or improper.
// When the numerator and the denominator are both positive, the
// fraction is called proper if the numerator is less than the
// denominator, and improper otherwise

function properImproperTest(arr: number[]) {
  return arr[0] / arr[1] <= 1 ? "Proper fraction." : "Improper fraction.";
}

console.log(properImproperTest([12, 300]));
console.log(properImproperTest([2, 4]));
console.log(properImproperTest([103, 3]));
console.log(properImproperTest([104, 2]));
console.log(properImproperTest([5, 40]));

// Proper fraction.
// Proper fraction.
// Improper fraction.
// Improper fraction.
// Proper fraction.
