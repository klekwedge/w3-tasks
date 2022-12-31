// Write a JavaScript function to convert an angle from degrees to radians.
// Test Data :
// console.log(degrees_to_radians(45));
// 0.7853981633974483

function degreesToRadians(num: number) {
  return (num * Math.PI) / 180;
}

console.log(degreesToRadians(45));

// 0.7853981633974483
