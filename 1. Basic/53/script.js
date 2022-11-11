"use strict";
// Write a JavaScript program to divide two positive numbers and
// return a string with properly formatted commas
function divideNumbers(a, b) {
    let div = Math.round(a / b).toString(), result_array = div.split('');
    if (Math.round(a / b) >= 1000) {
        for (let i = div.length - 3; i > 0; i -= 3) {
            result_array.splice(i, 0, ',');
        }
        result_array;
    }
    return result_array;
}
console.log(divideNumbers(1, 5));
console.log(divideNumbers(53, 5));
console.log(divideNumbers(876543, 654));
console.log(divideNumbers(87654, 311));
console.log(divideNumbers(85078, 12));
// [ '0' ]
// [ '1', '1' ]
// [ '1', ',', '3', '4', '0' ]
// [ '2', '8', '2' ]
// [ '7', ',', '0', '9', '0' ]
