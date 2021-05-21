const { expect } = require('chai')
const { binarySearch } = require('./searchBinary')

it("binarySearch", () => {
  // expect(binarySearch([1, 2, 3, 4, 5], 1)).to.equal(0)
  // expect(binarySearch([0, 1, 2, 3, 4, 5], 5)).to.equal(5)
  // expect(binarySearch([1, 2, 3, 4, 5, 6, 7], 2)).to.equal(1)
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7], 7)).to.equal(6)
})