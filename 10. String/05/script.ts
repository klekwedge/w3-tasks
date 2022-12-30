// Write a JavaScript function to convert a string in abbreviated form.

function abbrevName(str: string) {
  const arr = str.trim().split(" ");

  if (arr.length > 1) {
    return arr[0] + " " + arr[1][0] + ".";
  }

  return arr[0];
}

console.log(abbrevName("Robin Singh"));

// Robin S.
