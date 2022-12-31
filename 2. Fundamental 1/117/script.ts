// Write a JavaScript program to truncate a string up to a specified length.

const truncateString = (str: string, length: number) =>
  length <= str.length
    ? str.slice(0, length > 3 ? length - 3 : length) + "..."
    : str;

console.log(truncateString("boomerang", 7));

// boom...
