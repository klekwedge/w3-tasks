// Write a JavaScript function to filter false, null, 0 and
// blank values from an array.
// Test Data :
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// [58, "abcd", true]

function filterArrayValues(arr: any[]) {
  return arr.filter((item) => item);
}

console.log(filterArrayValues([58, "", "abcd", true, null, false, 0]));

// [ 58, 'abcd', true ]
