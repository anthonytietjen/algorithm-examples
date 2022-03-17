// By Anthony Tietjen

const { expect } = require("chai")

function getMaxId(arr) {
  let max = 0;
  for (let row of arr) {
    if (row.id > max) max++;
  }
  return max;
}

function getMaxId2(arr) {
  let max = 0;
  arr.reduce(arr)
  return max;
}

describe("reduce", () => {
  const arr = [
    { id: 1, name: 'Hi' },
    { id: 2, name: 'Hi2' },
    { id: 3, name: 'Hi3' }
  ]

  it("getMaxId", () => {
    expect(getMaxId(arr)).to.eql(3)
  })

  it("getMaxId2", () => {
    expect(getMaxId2(arr)).to.eql(3)
  })
})