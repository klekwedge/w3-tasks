// Write a JavaScript program to concatenate two strings
// except their first character.

function createNewString(a: string, b: string): string {
  return a.slice(1) + b.slice(1);
}

console.log(createNewString('gfcnngndmm', 'fbn'));
console.log(createNewString('adc2', 'ybvcgb'));
console.log(createNewString('ffft', 'hgfbh'));
console.log(createNewString('op6opo', 'jjvff'));
console.log(createNewString('test', 'plknbg'));

// fcnngndmmbn
// dc2bvcgb
// fftgfbh
// p6opojvff
// estlknbg
