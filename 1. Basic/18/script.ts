// Write a JavaScript program to create a new string adding "Py"
// in front of a given string. If the given string begins with
// "Py" then return the original string.

function createNewString(str: string): string {
  if (str.slice(0, 2) === 'Py') {
    return str;
  }

  return 'Py' + str;
}

console.log(createNewString('test'));
console.log(createNewString('Example'));
console.log(createNewString('Python'));

// Pytest
// PyExample
// Python