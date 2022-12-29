// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

function getCurrentDate(): void {
  const date = new Date();
  let day: number | string = date.getDate();
  day = day < 10 ? `0${day}` : day;

  console.log(`Current date is ${day}-${date.getMonth() + 1}-${date.getFullYear()}`)
  console.log(`Current date is ${day}/${date.getMonth() + 1}/${date.getFullYear()}`)

  console.log(`Current date is ${date.getMonth() + 1}-${day}-${date.getFullYear()}`)
  console.log(`Current date is ${date.getMonth() + 1}/${day}/${date.getFullYear()}`)
}

getCurrentDate();

// Current date is 07-11-2022
// Current date is 07/11/2022
// Current date is 11-07-2022
// Current date is 11/07/2022