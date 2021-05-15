// Auxuliary space complexity: the space taken up by the algorithm itself, excluding the inputs

// Constant space: primitives such as boolean, number, null, undefined
// Strings require O(n) space (n is the string length)
// Indexes or Objects require (n) space (n is the array length or object key count)

// O(1) - Constant
function sum(arr) {
  let total = 0;
  for (let i = 0; i < Array.length; i++) {
    total += arr[i];
  }
  return total;
}

// O(n) - Linear
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
