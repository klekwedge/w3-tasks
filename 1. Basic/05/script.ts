// Write a JavaScript program to rotate the string 'w3resource'
// in right direction by periodically removing one letter from
// the end of the string and attaching it to the front.

function rotateStr(): void {
  const str = 'w3resource';
  let strArr = str.split('')
  let res = '';

  for (let i = 0; i < str.length; i++) {
    res += strArr.pop();
  }

  console.log(`Res: ${res}`)
}

rotateStr();

// Res: ecruoser3w