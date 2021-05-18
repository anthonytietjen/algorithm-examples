const { expect } = require('chai')
const { sumZero } = require('./sumZero')

it("validAnagram", () => {
  expect(sumZero([-3, -1, 0, 1, 4])).to.eql([-1, 1])
  expect(sumZero([-5, -3, 0, 2, 4])).to.eql(undefined)
})