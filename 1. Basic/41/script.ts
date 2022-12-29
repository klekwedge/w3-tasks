// Write a JavaScript program to check three given numbers,
// if the three numbers are same return 30 otherwise return
// 20 and if two numbers are same return 40.

function checkNums(a: number, b: number, c:number): number {
  if(a === b && a === c){
    return 30;
  }
  else if(a === b || a === c || b === c){
    return 40;
  }
  return 20;
}

console.log(checkNums(99, 3, 99));
console.log(checkNums(8, 8, 65));
console.log(checkNums(8, 8, 8));
console.log(checkNums(7, 4, 4));
console.log(checkNums(12, 4, 1));
console.log(checkNums(9, 65, 343));

// 40
// 40
// 30
// 40
// 20
// 20
