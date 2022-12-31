// Write a JavaScript program to calculate the product of non-negative
// integers n1 and n2 represented as strings. The product is also
// returned as a string.
// Test Data:
// ("11", "10") -> "110"
// ("17", "19") -> "323"
// ("1", "0") -> "0"
// ("0", "0") -> "0"

function test(a: string, b: string) {
  return !isNaN(+a * +b) ? String(+a * +b) : null;
}

let n1 = "11";
let n2 = "10";
console.log(test(n1, n2));

n1 = "17";
n2 = "19";
console.log(test(n1, n2));

n1 = "1";
n2 = "0";
console.log(test(n1, n2));

n1 = "0";
n2 = "0";
console.log(test(n1, n2));

// 110
// 323
// 0
// 0
