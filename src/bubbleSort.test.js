const { expect } = require('chai')
const { bubbleSort } = require('./bubbleSort')

it("bubbleSort", () => {
  expect(bubbleSort([2, 4, 1])).to.eql([1, 2, 4])
})