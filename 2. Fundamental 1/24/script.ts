// Write a JavaScript program to filter out the
// non-unique values in an array, based on a provided
// comparator function.

const decapitalize = (str: string, upper: boolean = false) => {
  return !upper
    ? str[0].toLowerCase() + str.slice(1)
    : str[0].toLowerCase() + str.slice(1).toUpperCase();
};

console.log(decapitalize("W3resource"));
console.log(decapitalize("Red", true));

// w3resource
// rED
