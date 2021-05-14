// O(n)  - Linear
function addLinear(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(addLinear(100000));


// O(1) - Constant
function addConstant(n) {
  let total = (n * (n + 1)) / 2;
  return total;
}
console.log(addConstant(100000));

// O(n²) Quadratic
function addQuadratic(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      total += j;
    }
  }
  return total;
}
console.log(addQuadratic(1000));