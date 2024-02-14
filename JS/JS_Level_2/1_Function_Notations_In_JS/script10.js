//self executing function in js --- also known as IIFE --- Immediately Invoked Function Execution
// The self-executing anonymous function is a special function which is invoked right after it is defined. There is no need to call this function anywhere in the script. This type of function has no name and hence it is called an anonymous function. The function has a trailing set of parenthesis. The parameters for this function could be passed in the parenthesis.

// Why use an anonymous function?
// The advantage of using an anonymous function rather than writing the code directly is that the variables and functions defined within the anonymous function are not available to the code outside it.

(function (a, b, c) {
  // Function body
  let sum = a + b + c;
  console.log("The value of sum is ", sum);
})(1, 2, 3);

// console.log("The value of sum is ", sum);
