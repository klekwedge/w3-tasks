// Write a JavaScript program to convert a given string into an array of words.

const words = (str: string) => str.replace(/[^\w\s]|_/gi, "").split(' ');

console.log(words("I love javaScript!!"));
console.log(words("python, java, php"));

// [ 'I', 'love', 'javaScript' ]
// [ 'python', 'java', 'php' ]
