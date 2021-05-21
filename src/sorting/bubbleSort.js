// Buble Sort (large values bubble to the top)
// or Sinking Sort (small values sink to the bottom)

// Time complexity: O(n^2) - Quadradic
function bubbleSort(arr) {
  let didSwap;
  // Iterate from the end of the array to the beginning
  for (let i = arr.length; i > 0; i--) {
    didSwap = false;
    // Iterate from the beginning of the array to wherever i currently is
    for (let j = 0; j < i - 1; j++) {
      // If the element is greater than the next element, swap them
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        didSwap = true;
      }
    }
    if (!didSwap) break;
  }
  return arr;
}

module.exports = {
  bubbleSort
}