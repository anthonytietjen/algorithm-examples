const { expect } = require('chai');
const { factorialIterative, factorialRecursive } = require('./factorial');

it("factorialIterative", () => {
  expect(factorialIterative(3)).to.equal(6);
  expect(factorialIterative(4)).to.equal(24);
})
it("factorialRecursive", () => {
  expect(factorialRecursive(3)).to.equal(6);
  expect(factorialRecursive(4)).to.equal(24);
})