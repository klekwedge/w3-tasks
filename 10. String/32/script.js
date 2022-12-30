"use strict";
// Write a JavaScript function to remove?non-printable ASCII chars.
// Test Data :
// console.log(remove_non_ascii('???????PHP-MySQL??????'));
// "PHP-MySQL"
function removeNonAascii(str) {
    return str.replace(/[^\x20-\x7E]/gi, "");
}
console.log(removeNonAascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));
// PHP-MySQL
