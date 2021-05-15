const codeA = "A".charCodeAt(0)
const codeZ = "Z".charCodeAt(0)
const codea = "a".charCodeAt(0)
const codez = "z".charCodeAt(0)
const code0 = "0".charCodeAt(0)
const code9 = "9".charCodeAt(0)

function charCount2(str) {
  const obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (isAlphaNumeric(char)) {
      obj[char] = obj[char] > 0 ? obj[char] + 1 : 1
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= codeA && code <= codeZ) ||
    (code >= codea && code <= codez) ||
    (code >= code0 && code <= code9)
  );
}

console.log(JSON.stringify(charCount2('abc')) === JSON.stringify({ a: 1, b: 1, c: 1 }))
console.log(JSON.stringify(charCount2('Abc')) === JSON.stringify({ a: 1, b: 1, c: 1 }))
console.log(JSON.stringify(charCount2('A b c')) === JSON.stringify({ a: 1, b: 1, c: 1 }))