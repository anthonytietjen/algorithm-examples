const { expect } = require('chai')
const { countUnique } = require('./countUnique')

it("countUnique", () => {
  expect(countUnique([1, 1, 2, 3])).to.equal(3)
  expect(countUnique([1, 1, 1, 2, 4])).to.equal(3)
  expect(countUnique([1, 2, 3, 4])).to.equal(4)
})