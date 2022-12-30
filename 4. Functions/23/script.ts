// Write a JavaScript function to find the first not repeated character.

interface IObj {
  [index: string]: string;
}
function findFirstNotRepeatedChar(str: string) {
  const obj: IObj = {};

  for (let i = 0; i < str.length; i++) {
    if (i === str.lastIndexOf(str[i]) && !obj.hasOwnProperty(str[i])) {
      return str[i];
    } else {
      obj[str[i]] = str[i];
    }
  }
}
console.log(findFirstNotRepeatedChar("abacddbec"));

// e
