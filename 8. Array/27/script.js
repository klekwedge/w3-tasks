"use strict";
// Write a JavaScript function to retrieve the value of a given
// property from all elements in an array.
function propertyValue(arr, prop) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if (el[prop]) {
            res.push(el[prop]);
        }
    }
    return res;
}
const library = [
    { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
    { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        libraryID: 3245,
    },
];
console.log(propertyValue(library, "title"));
console.log(propertyValue(library, "author"));
// [
//   'The Road Ahead',
//   'Walter Isaacson',
//   'Mockingjay: The Final Book of The Hunger Games'
// ]
// [ 'Bill Gates', 'Steve Jobs', 'Suzanne Collins' ]
