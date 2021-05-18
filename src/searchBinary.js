// Time complexity: O(log n)
function binarySearch(haystack, needle) {
  let left = 0;
  let right = haystack.length - 1;
  let middle = Math.floor((right + left) / 2);

  while (haystack[middle] !== needle && left <= right) {
    if (needle < haystack[middle]) right = middle - 1;
    else left = middle + 1;
    middle = Math.floor((right + left) / 2);
  }

  return haystack[middle] === needle ? middle : -1;
}

module.exports = {
  binarySearch
}