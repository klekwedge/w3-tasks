// Write a JavaScript program to compute the sum of
// all digits that occur in a given string.

function sumDigit(str: string) {
  const res = str
    .match(/\d+/gi)
    ?.join("")
    .split("")
    .map(item => +item)
    .reduce((prev, next) => prev + next);

  return res;
}

console.log(sumDigit("abcd12efg9"));
console.log(sumDigit("w3resource"));
console.log(sumDigit("w6654321r54esource"));

// 12
// 3
// 36
