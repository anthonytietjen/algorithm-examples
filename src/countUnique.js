function countUnique(arr) {
  let i = 0;
  let j = 1;

  if (arr.length === 0) {
    return 0;
  }

  if (arr.length === 1) {
    return 1;
  }

  while (j < arr.length) {
    if (arr[i] == arr[j]) {
      j++;
    } else {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

module.exports = {
  countUnique
}