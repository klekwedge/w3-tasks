// Write a JavaScript program to swap pairs of adjacent digits
// of a given integer of even length.

function swapAdjacentDigits(num: number) {
  let arr = String(num).split("");

  if (arr.length % 2 === 1) {
    return null;
  }

  for (let i = 0; i < arr.length - 1; i += 2) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
  return +arr.join("");
}

console.log(swapAdjacentDigits(15));
console.log(swapAdjacentDigits(1234));
console.log(swapAdjacentDigits(123456));
console.log(swapAdjacentDigits(12345));

// 51
// 2143
// 214365
// null
