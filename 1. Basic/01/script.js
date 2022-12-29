"use strict";
// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
function getDay(day) {
    switch (day) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "";
    }
}
function getCurrentDay() {
    const date = new Date();
    console.log("Today is", getDay(date.getDay()));
    console.log(`Current time is ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}
getCurrentDay();
// Today is Thursday
// Current time is 20:31:29
