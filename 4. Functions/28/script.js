"use strict";
// Write a JavaScript program to pass a 'JavaScript function' as parameter.
function addStudent(name, refreshCallback) {
    refreshCallback(name);
}
function refreshStudentList(name) {
    console.log("Hello " + name);
}
addStudent('Alex', refreshStudentList);
// Hello Alex
