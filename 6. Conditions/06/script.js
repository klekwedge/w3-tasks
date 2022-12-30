"use strict";
// Write a JavaScript program which compute, the average marks of the following
// students Then, this average is used to determine the corresponding grade.
const estimates = [80, 77, 88, 95, 68];
let avgMarks = 0;
const avg = [];
for (let i = 0; i < estimates.length; i++) {
    avgMarks += estimates[i];
}
console.log("Average grade: " + avgMarks / estimates.length);
for (let i = 0; i < estimates.length; i++) {
    if (estimates[i] < 60) {
        console.log("Grade : F");
    }
    else if (estimates[i] < 70) {
        console.log("Grade : D");
    }
    else if (estimates[i] < 80) {
        console.log("Grade : C");
    }
    else if (estimates[i] < 90) {
        console.log("Grade : B");
    }
    else if (estimates[i] < 100) {
        console.log("Grade : A");
    }
}
// Average grade: 81.6
// Grade : B
// Grade : C
// Grade : B
// Grade : A
// Grade : D
