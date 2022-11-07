// Write a JavaScript program to calculate days left until next Christmas.

function countDaysUntilChristmas(): void {
  const currentYear = new Date();
  const nextYear = new Date(currentYear.getFullYear() + 1, 0, 1);

  console.log(
    Math.floor((+nextYear - +currentYear) / (1000 * 60 * 60 * 24)) +
      ' days left until Christmas!'
  );
}

countDaysUntilChristmas();

// 54 days left until Christmas!
