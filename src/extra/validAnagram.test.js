const { expect } = require('chai')
const { validAnagram } = require('./validAnagram')

it("validAnagram", () => {
  expect(validAnagram("abc", "cab")).to.eql(true)
  expect(validAnagram("abc", "ab")).to.eql(false)
  expect(validAnagram("abc", "bacc")).to.eql(false)
  expect(validAnagram("computer", "retupmoc")).to.eql(true)
})