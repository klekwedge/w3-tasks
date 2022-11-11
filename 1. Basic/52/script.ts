// Write a JavaScript program to check whether a given string
// contains equal number of p's and t's

function convertLetters(str: string): boolean {
  return str.match(/p/gi)?.length === str.match(/t/gi)?.length;
}

console.log(convertLetters('ptptpt'));
console.log(convertLetters('ppppppppttttttttttttttt'));
console.log(convertLetters('123'));
console.log(convertLetters('ptptpptptpt'));
console.log(convertLetters('ptptptptptpptptptptttt'));

// true
// false
// true
// false
// false
