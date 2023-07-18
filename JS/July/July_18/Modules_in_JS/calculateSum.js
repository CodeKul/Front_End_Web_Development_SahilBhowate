//This is example of default export.

function findTheSum(a, b) {
  let c = a + b;

  console.log("The sum of two numbers is ", c);
}

function findTheSumOfThreeNumbers(a, b, c) {
  let d = a + b + c;

  console.log("The sum of three numbers is ", d);
}

//exporting the function "findTheSum" through "default exports"
export default findTheSum;

//In a single .js file you cannot export more than one entity through "export default" statement
// export default findTheSum;
// findTheSumOfThreeNumbers;
