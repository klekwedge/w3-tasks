// Write a JavaScript program to convert a given number to hours and minutes.

function convertNumber(num: number): string {
  return `Hours: ${Math.floor(num / 60)}, minutes: ${num % 60}`;
}

console.log(convertNumber(100));
console.log(convertNumber(3500));
console.log(convertNumber(60));
console.log(convertNumber(59));
console.log(convertNumber(120));

// Hours: 1, minutes: 40
// Hours: 58, minutes: 20
// Hours: 1, minutes: 0
// Hours: 0, minutes: 59
// Hours: 2, minutes: 0
