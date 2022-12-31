"use strict";
// Write a JavaScript program to check two given vectors are orthogonal or not.
// Two vectors are orthogonal if they are perpendicular to each other. i.e. the
// dot product of the two vectors is zero.
// Let u and v are two vectors. The vectors u, v will be orthogonal if they are
// perpendicular, i.e., they form a right angle, or if the dot product they yield is zero.
// Test Data:
// ([2, 4, 1], [2, 1, -8]) -> true
// ([1, 0, 1], [0, 0, 1]) -> false
// ([1, 0, 0], [0, 1, 0]) -> true
function test(a, b) {
    if (a.length !== b.length) {
        return null;
    }
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i] * b[i];
    }
    return sum === 0;
}
let nums1 = [2, 4, 1];
let nums2 = [2, 1, -8];
console.log(test(nums1, nums2));
nums1 = [1, 0, 1];
nums2 = [0, 0, 1];
console.log(test(nums1, nums2));
nums1 = [1, 0, 0];
nums2 = [0, 1, 0];
console.log(test(nums1, nums2));
// true
// false
// true
