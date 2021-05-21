// Based on solution at https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344156#content
// Insertion Sort by taking an element one at a time and inserting it in the correct location

// Time Complexity: O(n^2)
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

module.exports = {
  insertionSort
}