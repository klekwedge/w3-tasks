"use strict";
// Write a JavaScript program where the program takes a random
// integer between 1 to 10, the user is then prompted to input a
// guess number. If the user input matches with guess number,
// the program will display a message "Good Work" otherwise display a
// message "Not matched".
function isRandomNumbersMatch() {
    const randomNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    const randomUserNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    console.log(`randomNum: ${randomNum}`, `randomUserNum: ${randomUserNum}`);
    if (randomNum === randomUserNum) {
        console.log("Good Work");
    }
    else {
        console.log("Not matched");
    }
}
isRandomNumbersMatch();
// randomNum: 9 randomUserNum: 4
// Not matched
