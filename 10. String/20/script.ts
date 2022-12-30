// Write a JavaScript function that can pad (left, right) a string to get
// to a determined length. Go to the editor
// Test Data :
// console.log(formatted_string('0000',123,'l'));
// console.log(formatted_string('00000000',123,''));
// Output :
// "0123"
// "12300000"

function formattedString(str: string, num: number, side: string) {
  if(side){
    return str.slice(0, String(num).length - 2) + num;
  }
  else{
    return num + str.slice(0, String(num).length + 2);
  }
}

console.log(formattedString("0000", 123, "l"));
console.log(formattedString("00000000", 123, ""));

// 0123
// 12300000
