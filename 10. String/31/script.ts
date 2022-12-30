// Write a JavaScript function to escapes special characters (&, <, >, ', ") for use in HTML.
// Test Data :
// console.log(escape_html('PHP & MySQL'));
// "PHP &amp; MySQL"
// console.log(escape_html('3 > 2'));
// "3 &gt; 2"

interface IObj {
  [index: string]: string;
}

function escapeHtml(str: string) {
  if (str === null || str === "") {
    return false;
  }

  let res = "";

  const map: IObj = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };

  for (let i = 0; i < str.length; i++) {
    const el = str[i];

    if (map[el]) {
      res += map[el];
    } else {
      res += str[i];
    }
  }

  return res;
}

console.log(escapeHtml("PHP & MySQL"));
console.log(escapeHtml("3 > 2"));

// PHP &amp; MySQL
// 3 &gt; 2
