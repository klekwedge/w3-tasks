// Write a JavaScript program to find the types of a given angle.

function findTypesGivenAngle(angle: number): string {
  if (angle === 90) {
    return "Right angle";
  } else if (angle === 180) {
    return "Straight angle";
  } else if (angle < 90 && angle > 0) {
    return "Acute angle";
  } else if (angle > 90 && angle < 180) {
    return "Obtuse angle";
  }

  return 'Error'
}

console.log(findTypesGivenAngle(180));
console.log(findTypesGivenAngle(90));
console.log(findTypesGivenAngle(34));
console.log(findTypesGivenAngle(98));
console.log(findTypesGivenAngle(360));

// Straight angle
// Right angle
// Acute angle
// Obtuse angle
// Error
