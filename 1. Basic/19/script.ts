// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400

function checkNum(num: number): boolean {
  return (num >= 20 && num <= 100) || num === 400;
}

console.log(checkNum(400));
console.log(checkNum(21));
console.log(checkNum(5));
console.log(checkNum(3));

// true
// true 
// false
// false