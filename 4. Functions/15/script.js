"use strict";
// Write a JavaScript function to compute the value of bn where n is the exponen
//t and b is the bases. Accept b and n from the user and display the result.
function exp(b, n) {
    let ans = 1;
    for (let i = 1; i <= n; i++) {
        ans = b * ans;
    }
    return ans;
}
console.log(exp(2, 3));
// 8
