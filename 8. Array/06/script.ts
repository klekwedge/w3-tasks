// Write a JavaScript program which accept a number as input and
// insert dashes (-) between each two even numbers. For example
// if you accept 025468 the output should be 0-254-6-8.

const num = 25468;
const arr = String(num)
  .split("")
  .map((item) => +item);
let res = "";

for (let i = 0; i < arr.length; i++) {
  res += arr[i];
  if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0) {
    res += "-";
  }
}

console.log(res);

// 254-6-8
