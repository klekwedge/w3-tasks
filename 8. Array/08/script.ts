// Write a JavaScript program to find the most frequent item of an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

interface IObj {
  [index: string]: number;
}

const arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
const obj: IObj = {};

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]]) {
    obj[arr[i]]++;
  } else {
    obj[arr[i]] = 1;
  }
}

const res = ["", 0];
const arrObj = Object.entries(obj);
for (let i = 0; i < arrObj.length; i++) {
  const el = arrObj[i];
  if (res[1] < el[1]) {
    res[0] = el[0];
    res[1] = el[1];
  }
}

console.log(`${res[0]} (${res[1]} times)`);

// a (5 times)
