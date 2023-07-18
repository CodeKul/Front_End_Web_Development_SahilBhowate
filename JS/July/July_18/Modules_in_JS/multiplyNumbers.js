//This is the example of named export.
function multiply(a, b) {
  let c = a * b;

  console.log("The product of two numbers is ", c);
}

function multiplyThreeNumbers(x, y, z) {
  let product = x * y * z;

  console.log("The product of three numbers is ", product);
}

//named exports
//Multiple named exports are allowed in the single .js file
export { multiply, multiplyThreeNumbers };
