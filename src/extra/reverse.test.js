// By Anthony Tietjen

const { expect } = require("chai")

function reverse(arr) {
  const newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}

function reverseSwap(arr) {
  const swap = (a, b) => {
    temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  let temp;
  let right = arr.length - 1;
  for (let i = 0; i <= right; i++) {
    console.log(arr);
    swap(i, right);
    right--;
  }
  return arr;
}

describe("reverse", () => {
  it("reverse", () => {
    expect(reverse([1, 2, 3])).to.eql([3, 2, 1])
    expect(reverse([1, 2, 3, 4, 5, 6])).to.eql([6, 5, 4, 3, 2, 1])
  })
  it("reverseSwap", () => {
    expect(reverseSwap([1, 2, 3])).to.eql([3, 2, 1])
    expect(reverseSwap([1, 2, 3, 4, 5, 6])).to.eql([6, 5, 4, 3, 2, 1])
  })
})