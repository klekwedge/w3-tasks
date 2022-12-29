"use strict";
// Write a JavaScript program to check the total marks of
// a student in various examinations. The student will
// get A+ grade if the total marks are in the range
// 89..100 inclusive, if the examination is "Final-exam."
// the student will get A+ grade and total marks must be
// greater than or equal to 90. Return true if the student
// get A+ grade or false otherwise.
function examStatus(totalMarks, isExam = false) {
    if (isExam) {
        return totalMarks >= 90;
    }
    return totalMarks >= 89 && totalMarks <= 100;
}
console.log(examStatus(78));
console.log(examStatus(89, true));
console.log(examStatus(99, true));
// false
// false
// true
