// Write a JavaScript program to multiply every digit of a number three times.
// Test Data:
// (11) -> 11
// (66) -> 216216
// (336) -> 2727216
// (444) -> 646464
// (1151) -> 111251

function test(num: number) {
  return String(num)
    .split("")
    .map((item) => (+item) ** 3)
    .join("");
}

let n = 11;
console.log(test(n));

n = 66;
console.log(test(n));

n = 336;
console.log(test(n));

n = 444;
console.log(test(n));

n = 1151;
console.log(test(n));

// 11
// 216216
// 2727216
// 646464
// 111251
