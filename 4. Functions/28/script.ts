// Write a JavaScript program to pass a 'JavaScript function' as parameter.

function addStudent(name: string, refreshCallback: Function) {
  refreshCallback(name);
}

function refreshStudentList(name: string) {
  console.log("Hello " + name);
}

addStudent('Alex', refreshStudentList);

// Hello Alex
