// Write a JavaScript function to remove. 'null', '0', '""', 'false',
// 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

interface IBook {
  author: string;
  title: string;
  libraryID: number;
}

function compareToSort(a: IBook, b: IBook) {
  if (a.title < b.title) return -1;
  if (a.title > b.title) return 1;
  return 0;
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

console.log(library.sort(compareToSort));

// [
//   {
//     author: 'Suzanne Collins',
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     libraryID: 3245
//   },
//   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
//   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 }
// ]
