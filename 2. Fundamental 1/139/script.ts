// Write a JavaScript program to split a multiline string into an array of lines.

const splitLines = (str: string) => str.split("\n");

console.log(splitLines("This\nis a\nmultiline\nstring.\n"));

// [ 'This', 'is a', 'multiline', 'string.', '' ]
