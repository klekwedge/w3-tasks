// Write a JavaScript program that accept two integers and display the larger.

function compare(a: number, b: number) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  }
  return "Equal";
}

console.log(compare(30, 40));
console.log(compare(30, 30));
console.log(compare(30, 22));

// 40
// Equal
// 30
