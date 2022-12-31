"use strict";
// Write a JavaScript program to count the number of arrays inside a given array.
// Test Data :
// ([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
// ([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3
// Expected Output:
// Number of arrays inside the said array: 2
// Number of arrays inside the said array: 3
function test(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            counter++;
        }
    }
    return counter;
}
let arrNums = [2, 8, [6], 3, 3, 5, 3, 4, [5, 4]];
console.log(test(arrNums));
arrNums = [2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]];
console.log(test(arrNums));
// 2
// 3
