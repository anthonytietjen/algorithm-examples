// Frequency Counting pattern

function validAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  const obj1 = {}
  const obj2 = {}

  for (let letter of string1) {
    obj1[letter] = (obj1[letter] || 0) + 1;
  }

  for (let letter of string2) {
    obj2[letter] = (obj2[letter] || 0) + 1;
  }

  for (let key in obj1) {
    if (!(key in obj2)) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

module.exports = {
  validAnagram
}