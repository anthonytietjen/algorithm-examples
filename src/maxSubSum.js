function maxSubSum(arr, quantity) {
  if (arr.length < quantity) {
    return 0
  }

  let max = 0;
  let temp = 0;

  // get first sum
  for (let i = 0; i < quantity; i++) {
    max += arr[i];
  }
  temp = max;

  // loop array with sliding window
  for (let i = quantity; i < arr.length; i++) {
    // get next sum
    temp = temp - arr[i - quantity] + arr[i];

    // get max of next or temp
    max = Math.max(temp, max);
  }

  return max;
}

module.exports = {
  maxSubSum
}