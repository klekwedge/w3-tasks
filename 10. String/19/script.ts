// Write a JavaScript function to escape a HTML string. Go to the editor
// Test Data :
// console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
// Output :
// "&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"

function escapeHTML(str: string) {
  return str
    .replace(/&lt;/gi, "<")
    .replace(/&quot;/gi, '"')
    .replace(/&gt;/gi, ">");
}

console.log(
  escapeHTML(
    "&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"
  )
);

// <a href="javascript-string-exercise-17.php" target="_blank">
