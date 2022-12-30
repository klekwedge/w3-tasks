// Write a JavaScript function to concatenates a given string n times (default is 1).
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!

function repeat(str: string, num: number = 1) {
  let res = "";

  for (let i = 0; i < num; i++) {
    res += str;
  }

  return res;
}

console.log(repeat("Ha!"));
console.log(repeat("Ha!", 2));
console.log(repeat("Ha!", 3));

// Ha!
// Ha!Ha!
// Ha!Ha!Ha!
