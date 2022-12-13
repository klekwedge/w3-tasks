"use strict";
// Write a JavaScript program that takes two integers
// and a divisor. If the given divisor divides both
// integers and it does not divide either, then two
// given integers are similar. Check whether two given
// integers are similar or not.
function checkSimilar(num1, num2, divisor) {
    return ((num1 % divisor === 0 && num2 % divisor === 0) ||
        (num1 % divisor !== 0 && num2 % divisor !== 0));
}
console.log(checkSimilar(10, 20, 30));
console.log(checkSimilar(10, 2, 3));
console.log(checkSimilar(10, 25, 5));
console.log(checkSimilar(100, 9, 3));
console.log(checkSimilar(10, 20, 4));
// true
// true
// true
// false
// false
