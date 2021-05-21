const { expect } = require('chai')
const { charCount } = require('./charCount')

it("charCount", () => {
  expect(charCount("abc")).to.eql({ a: 1, b: 1, c: 1 })
  expect(charCount("Abc")).to.eql({ a: 1, b: 1, c: 1 })
  expect(charCount("A b c")).to.eql({ a: 1, b: 1, c: 1 })
})