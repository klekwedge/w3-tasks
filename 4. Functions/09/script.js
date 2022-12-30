"use strict";
// Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean,
// function, number, string, and undefined.
function detectDataType(value) {
    const dtypes = [Function, RegExp, Number, String, Boolean, Object];
    let len = dtypes.length;
    if (typeof value === "object" || typeof value === "function") {
        for (let i = 0; i < len; i++) {
            if (value instanceof dtypes[i]) {
                return dtypes[i];
            }
        }
    }
    return typeof value;
}
console.log(detectDataType(12));
console.log(detectDataType("w3resource"));
console.log(detectDataType(false));
// number
// string
// boolean
