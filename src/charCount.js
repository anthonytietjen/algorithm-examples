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

module.exports = {
  charCount
}