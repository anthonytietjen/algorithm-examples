const { expect } = require('chai')
const { charCount2 } = require('./charCount2')

it("charCount2", () => {
  expect(charCount2("abc")).to.eql({ a: 1, b: 1, c: 1 })
  expect(charCount2("Abc")).to.eql({ a: 1, b: 1, c: 1 })
  expect(charCount2("A b c")).to.eql({ a: 1, b: 1, c: 1 })
})