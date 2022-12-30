// Write a JavaScript function that returns array elements larger than a number.

function biggerElements(val: number) {
  return function (evalue: number, index: number, array: number[]) {
    return evalue >= val;
  };
}

const result = [11, 45, 4, 31, 64, 10].filter(biggerElements(10));

console.log(result);

// [ 11, 45, 31, 64, 10 ]
