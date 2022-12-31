// Write a JavaScript program to get all the indexes where
// NaN is found of a given array of numbers and NaN.
// Test Data :
// ([2, NaN, 8, 16, 32]) -> [1]
// ([2, 4, NaN, 16, 32, NaN]) -> [2,5]
// ([2, 4, 16, 32]) ->[]
// Expected Output:
// Original array: 2,NaN,8,16,32
// Find all indexes of NaN of the said array: 1
// Original array: 2,4,NaN,16,32,NaN
// Find all indexes of NaN of the said array: 2,5
// Original array: 2,4,16,32
// Find all indexes of NaN of the said array:

function test(arr: number[]) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      res.push(i);
    }
  }
  return res;
}

let arrNums = [2, NaN, 8, 16, 32];
console.log(test(arrNums));

arrNums = [2, 4, NaN, 16, 32, NaN];
console.log(test(arrNums));

arrNums = [2, 4, 16, 32];
console.log(test(arrNums));

// [ 1 ]
// [ 2, 5 ]
// []
