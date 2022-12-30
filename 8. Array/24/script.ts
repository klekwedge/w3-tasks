// Write a JavaScript function to remove. 'null', '0', '""', 'false',
// 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

function filterArray(arr: any[]) {
  return arr.filter((item) => item);
}

console.log(filterArray([NaN, 0, 15, false, -22, "", undefined, 47, null]));

// [15,-22,47]
