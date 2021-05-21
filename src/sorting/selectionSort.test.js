const { expect } = require('chai')
const { selectionSort } = require('./selectionSort')

it("selectionSort", () => {
  expect(selectionSort([2, 4, 1])).to.eql([1, 2, 4])
})