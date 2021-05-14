// O(n)  - Linear
// |         /
// |      /    
// |   /
// |/___________
function addLinear(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(addLinear(100000));


// O(1) - Constant
// |
// |
// |-----------
// |___________
function addConstant(n) {
  let total = (n * (n + 1)) / 2;
  return total;
}
console.log(addConstant(100000));

// O(n^2) Quadratic
// |  |
// |  /   
// | / 
// |/__________
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

// Simplifying
// O(n + 10)         = O(n)
// O(100)            = O(1)
// O(n^2 + 10n + 8)  = O(n^2)