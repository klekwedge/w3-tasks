// Write a JavaScript program to add two digits of a
// given positive integer of length two.

function addTwoDigits(num: number): number {
  let res = 0;
  while(num / 10 !== 0){
    res += num % 10;
    num = Math.floor(num / 10);
  }
  return res;
}

console.log(addTwoDigits(30));
console.log(addTwoDigits(61));
console.log(addTwoDigits(41));
console.log(addTwoDigits(6));
console.log(addTwoDigits(40));

// 3
// 7
// 5
// 6
// 4
