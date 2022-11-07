// Write a JavaScript program to find 1st January is being a
// Sunday between 2014 and 2050.

function isBeginningOfYearSunday(): void {
  for (let year = 2014; year <= 2050; year++) {
    const date = new Date(year, 0, 1)
    if (date.getDay() === 0) {
      console.log(`Year ${year} is Sunday`);
    }
  }
}

isBeginningOfYearSunday();

// Year 2017 is Sunday
// Year 2023 is Sunday
// Year 2034 is Sunday
// Year 2040 is Sunday
// Year 2045 is Sunday