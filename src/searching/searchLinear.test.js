const { expect } = require('chai')
const { linearSearch } = require('./searchLinear')

it("linearSearch", () => {
  expect(linearSearch([1, 2, 3], 2)).to.equal(1)
})