// Write a JavaScript program to add repeatedly all digits of
// a given non-negative number until the result has only one digit.
// Test Data:
// (47) -> 2
// (9) -> 9

function test(num: number) {
  let str = String(num);
  while (str.length > 1) {
    str = String(
      str
        .split("")
        .map((item) => +item)
        .reduce((prev, next) => prev + next)
    );
  }

  return str;
}

let n = 49;
console.log(test(n));

n = 9;
console.log(test(n));

// 4
// 9
