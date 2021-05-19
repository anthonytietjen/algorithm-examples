const { expect } = require('chai')
const { searchString } = require('./searchString')

it("searchString", () => {
  expect(searchString("abcdefghijklmnopqrstuvwxyz", "hij")).to.equal(1)
  expect(searchString("abcdefghijklmnopqrstuvwxyzhij", "hij")).to.equal(2)
})