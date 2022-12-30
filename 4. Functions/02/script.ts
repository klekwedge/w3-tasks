// Write a JavaScript function that checks whether a passed string is palindrome or not?

function checkPalindrome(str: string) {
  str = str.replace(" ", "");
  return str.split("").reverse().join("") === str;
}

console.log(checkPalindrome("madam"));
console.log(checkPalindrome("nurses run"));
console.log(checkPalindrome("fox"));

// true
// true
// false
