// Write a JavaScript function to remove non-word characters. Go to the editor
// Test Data :
// console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));
// "PHP - MySQL"

function removeNonWord(str: string) {
  return str.replace(/[^\w-]/gi, "");
}

console.log(removeNonWord("PHP ~!@#$%^&*()+`-={}[]|\\:\";'/?><., MySQL"));

// PHP-MySQL
