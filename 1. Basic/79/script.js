"use strict";
// Write a JavaScript to add two positive integers without carry.
function addTwoIntegersWithoutCarry(a, b) {
    let res = 0;
    let count = 1;
    while (a / 10 !== 0 && b / 10 !== 0) {
        res += count * (((a % 10) + (b % 10)) % 10);
        a = Math.floor(a / 10);
        b = Math.floor(b / 10);
        count *= 10;
    }
    return res;
}
console.log(addTwoIntegersWithoutCarry(222, 911));
console.log(addTwoIntegersWithoutCarry(200, 900));
console.log(addTwoIntegersWithoutCarry(413, 111));
console.log(addTwoIntegersWithoutCarry(632, 241));
console.log(addTwoIntegersWithoutCarry(421, 425));
// 133
// 100
// 524
// 873
// 846
