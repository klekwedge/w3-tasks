// Write a JavaScript program to check whether a string
// starts with 'Java' and false otherwise.

function checkString(str: string): boolean {
  return str.startsWith('Java');
}

console.log(checkString('Hello'));
console.log(checkString('Java'));
console.log(checkString('Java231'));
console.log(checkString('1Java212121'));

// false
// true
// true
// false
