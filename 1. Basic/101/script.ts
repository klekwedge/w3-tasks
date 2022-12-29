// Write a JavaScript program to check whether a given string contains only Latin
// letters and no two uppercase and no two lowercase letters are in adjacent positions.

function isUpper(symbol: string) {
  return symbol.toUpperCase() === symbol ? true : false;
}

function checkStr(str: string) {
  if (!/^[A-Za-z]+$/gi.test(str) || str.length < 3) {
    return false;
  }

  for (let i = 0; i < str.length - 1; i++) {
    if (
      (isUpper(str[i]) && isUpper(str[i + 1])) ||
      (!isUpper(str[i]) && !isUpper(str[i + 1]))
    ) {
      return false;
    }
  }

  return true;
}

console.log(checkStr("212121Fxv1"));
console.log(checkStr("fffXffCCfxe2"));
console.log(checkStr("FciyotpPtrov"));
console.log(checkStr("GjCjTeJf"));
console.log(checkStr("vThMmToFfLvMeF"));

// false
// false
// false
// true
// true
