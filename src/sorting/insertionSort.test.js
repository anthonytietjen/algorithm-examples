const { expect } = require('chai')
const { insertionSort } = require('./insertionSort')

it("insertionSort", () => {
  expect(insertionSort([2, 4, 1])).to.eql([1, 2, 4])
})