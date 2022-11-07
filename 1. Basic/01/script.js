"use strict";
function getDay(day) {
    switch (day) {
        case 0: return 'Sunday';
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
        default:
            return '';
    }
}
function test() {
    const date = new Date();
    console.log('Today is', getDay(date.getDay()));
    console.log(`Current time is ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}
test();
