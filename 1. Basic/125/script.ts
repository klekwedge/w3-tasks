// Write a JavaScript program to find the longest string from a given array.

function findLongestStr(arr: string[]) {
  let res = "";

  for (let i = 0; i < arr.length; i++) {
    if (res.length < arr[i].length) {
      res = arr[i];
    }
  }

  return res;
}

console.log(findLongestStr(["ab", "a", "abcd"]));
console.log(findLongestStr(["ab", "ab", "ab"]));
console.log(findLongestStr(["fffz1zab", "a212121zb", "ax42z3ex3r3b"]));

// abcd
// ab
// ax42z3ex3r3b
