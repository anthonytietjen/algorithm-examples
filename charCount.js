function charCount(str) {
  const obj = {};
  for (let char of str) {
    if (/[A-za-z0-9]/.test(char)) {
      char = char.toLowerCase();
      obj[char] = obj[char] > 0 ? obj[char] + 1 : 1
    }
  }
  return obj;
}

console.log(JSON.stringify(charCount('abc')) === JSON.stringify({ a: 1, b: 1, c: 1 }))
console.log(JSON.stringify(charCount('Abc')) === JSON.stringify({ a: 1, b: 1, c: 1 }))
console.log(JSON.stringify(charCount('A b c')) === JSON.stringify({ a: 1, b: 1, c: 1 }))

module.exports = {
  charCount
}