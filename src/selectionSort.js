// Selection Sort. Select the smallest in the array and move it to the beginning

function selectionSort(arr) {
  let temp;

  // Loop over full array
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    // Loop sub section
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    // Swap
    if (i !== lowest) {
      temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
}

module.exports = {
  selectionSort
}