// Write a JavaScript exercise to get the extension of a filename.

function getExtension(str: string): string | undefined {
  return str.split('.').pop()
}

console.log(getExtension('script.js'));

// js
