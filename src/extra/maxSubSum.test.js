const { expect } = require('chai');
const { maxSubSum } = require('./maxSubSum');

it("maxSubSum", () => {
  expect(maxSubSum([], 3)).to.equal(0);
  expect(maxSubSum([1], 1)).to.equal(1);
  expect(maxSubSum([1, 4, 8], 2)).to.equal(12);
  expect(maxSubSum([9, 4, 8], 2)).to.equal(13);
})